import { useState, useMemo, useRef } from 'react';
import { Input, Segmented, Card, Tag, Button, Typography, message, Drawer, Badge, Empty } from 'antd';
import {
  SearchOutlined,
  CopyOutlined,
  HeartOutlined,
  HeartFilled,
  MoonOutlined,
  SunOutlined,
  StarOutlined,
  DeleteOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { objections, CONTEXTS, ContextType } from '../data/objections';
import { useFavorites } from '../hooks/useFavorites';

const { Title, Text, Paragraph } = Typography;

const TONE_COLORS: Record<string, string> = {
  Direct: '#E8453C',
  Soft: '#52A87E',
  Reframe: '#E8963C',
  Curious: '#5B8DEF',
  'Value-focused': '#8B7CF7',
};

interface IndexPageProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function IndexPage({ onToggleTheme, isDark }: IndexPageProps) {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [context, setContext] = useState<ContextType>(() => {
    return (localStorage.getItem('objection-context') as ContextType) || 'cold-call';
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const responsesRef = useRef<HTMLDivElement>(null);
  const { favorites, isFavorite, toggleFavorite, clearAll } = useFavorites();

  const filtered = useMemo(() => {
    if (!search.trim()) return objections;
    const q = search.toLowerCase();
    return objections.filter(
      o =>
        o.label.toLowerCase().includes(q) ||
        o.keywords.some(k => k.includes(q))
    );
  }, [search]);

  const selected = useMemo(
    () => objections.find(o => o.id === selectedId) ?? null,
    [selectedId]
  );

  const responses = useMemo(
    () => (selected ? selected.responses[context] : []),
    [selected, context]
  );

  const handleSelect = (id: string) => {
    setSelectedId(prev => (prev === id ? null : id));
    setTimeout(() => responsesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleContextChange = (val: string) => {
    const newContext = val as ContextType;
    setContext(newContext);
    localStorage.setItem('objection-context', newContext);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => message.success('Copied — say it like this'));
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: 80 }}>
      {/* Header */}
      <div
        style={{
          padding: '40px 20px 32px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 8 }}>
          <Badge count={favorites.length} size="small" offset={[-4, 4]}>
            <Button
              shape="circle"
              icon={<StarOutlined />}
              onClick={() => setDrawerOpen(true)}
              size="large"
            />
          </Badge>
          <Button
            shape="circle"
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={onToggleTheme}
            size="large"
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <MessageOutlined style={{ fontSize: 36, color: isDark ? '#8B7CF7' : '#6B5CE7' }} />
        </div>
        <Title level={2} style={{ marginBottom: 4 }}>
          Objection Helper
        </Title>
        <Text type="secondary" style={{ fontSize: 16 }}>
          Fast responses for awkward client objections.
        </Text>
      </div>

      {/* Search */}
      <div style={{ padding: '0 16px 16px' }}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search objections… e.g. expensive, busy, Facebook"
          allowClear
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="large"
        />
      </div>

      {/* Objection Picker */}
      <div style={{ padding: '0 16px 20px' }}>
        <Text strong style={{ display: 'block', marginBottom: 10, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
          Pick an objection
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {filtered.length === 0 && (
            <Text type="secondary" style={{ padding: 12 }}>No objections match your search.</Text>
          )}
          {filtered.map(o => (
            <Button
              key={o.id}
              type={selectedId === o.id ? 'primary' : 'default'}
              onClick={() => handleSelect(o.id)}
              style={{
                borderRadius: 20,
                fontWeight: selectedId === o.id ? 600 : 400,
                height: 'auto',
                padding: '8px 16px',
                whiteSpace: 'normal',
                textAlign: 'left',
              }}
            >
              "{o.label}"
            </Button>
          ))}
        </div>
      </div>

      {/* Context Selector */}
      {selected && (
        <div style={{ padding: '0 16px 20px' }}>
          <Text strong style={{ display: 'block', marginBottom: 10, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
            How are you talking to them?
          </Text>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <Segmented
              value={context}
              onChange={handleContextChange}
              options={CONTEXTS.map(c => ({ label: c.label, value: c.key }))}
              block
              style={{ minWidth: 480 }}
            />
          </div>
        </div>
      )}

      {/* Responses */}
      <div ref={responsesRef} style={{ padding: '0 16px' }}>
        {selected && (
          <>
            <Text strong style={{ display: 'block', marginBottom: 10, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              Say this:
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {responses.map((r, i) => (
                <Card
                  key={r.id}
                  size="small"
                  style={{
                    borderRadius: 14,
                    animation: `fadeSlideIn 0.3s ease ${i * 0.06}s both`,
                  }}
                  styles={{ body: { padding: '16px 18px' } }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <Tag
                      color={TONE_COLORS[r.tone]}
                      style={{ borderRadius: 6, fontWeight: 600, fontSize: 11 }}
                    >
                      {r.tone}
                    </Tag>
                  </div>
                  <Paragraph style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 12 }}>
                    {r.text}
                  </Paragraph>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button
                      icon={<CopyOutlined />}
                      size="small"
                      onClick={() => handleCopy(r.text)}
                    >
                      Copy
                    </Button>
                    <Button
                      icon={isFavorite(r.id) ? <HeartFilled style={{ color: '#E8453C' }} /> : <HeartOutlined />}
                      size="small"
                      onClick={() => toggleFavorite(r.id, selected.label, r.text, r.tone)}
                    >
                      {isFavorite(r.id) ? 'Saved' : 'Save'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Privacy link */}
      <div style={{ textAlign: 'center', padding: '40px 16px 20px' }}>
        <a href="#/privacy" style={{ fontSize: 13, opacity: 0.5 }}>Privacy</a>
      </div>

      {/* Favorites Drawer */}
      <Drawer
        title="Saved Responses"
        placement="bottom"
        height="70vh"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        extra={
          favorites.length > 0 ? (
            <Button icon={<DeleteOutlined />} size="small" danger onClick={clearAll}>
              Clear All
            </Button>
          ) : null
        }
      >
        {favorites.length === 0 ? (
          <Empty description="No saved responses yet" />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {favorites.map(f => (
              <Card key={f.responseId} size="small" style={{ borderRadius: 12 }}>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  "{f.objectionLabel}"
                </Text>
                <div style={{ margin: '6px 0' }}>
                  <Tag color={TONE_COLORS[f.tone]} style={{ borderRadius: 6, fontWeight: 600, fontSize: 11 }}>
                    {f.tone}
                  </Tag>
                </div>
                <Paragraph style={{ fontSize: 14, marginBottom: 8 }}>{f.text}</Paragraph>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button icon={<CopyOutlined />} size="small" onClick={() => handleCopy(f.text)}>
                    Copy
                  </Button>
                  <Button
                    icon={<HeartFilled style={{ color: '#E8453C' }} />}
                    size="small"
                    onClick={() => toggleFavorite(f.responseId, f.objectionLabel, f.text, f.tone)}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Drawer>
    </div>
  );
}
