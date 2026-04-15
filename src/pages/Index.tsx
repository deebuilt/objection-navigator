import { useState, useMemo, useRef } from 'react';
import { Input, Card, Tag, Button, Typography, message, Drawer, Badge, Empty, Select, Tooltip, Radio } from 'antd';
import {
  SearchOutlined,
  CopyOutlined,
  HeartOutlined,
  HeartFilled,
  MoonOutlined,
  SunOutlined,
  StarOutlined,
  DeleteOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { objections, CONTEXTS, CATEGORIES, TACTICS, TONE_INFO, ContextType, CategoryType } from '../data/objections';
import { useFavorites } from '../hooks/useFavorites';

const { Text, Paragraph } = Typography;

interface IndexPageProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function IndexPage({ onToggleTheme, isDark }: IndexPageProps) {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('price-budget');
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

  const isSearching = search.trim().length > 0;

  const objectionsByCategory = useMemo(() => {
    const grouped: Record<CategoryType, typeof filtered> = {
      'price-budget': [],
      'timing-priority': [],
      'trust-credibility': [],
      'competition-alternatives': [],
      'authority-decision': [],
    };
    filtered.forEach(o => {
      if (grouped[o.category]) {
        grouped[o.category].push(o);
      }
    });
    return grouped;
  }, [filtered]);

  const displayedObjections = useMemo(() => {
    if (isSearching) return filtered;
    return objectionsByCategory[activeCategory] ?? [];
  }, [isSearching, filtered, objectionsByCategory, activeCategory]);

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

  const handleContextChange = (val: ContextType) => {
    setContext(val);
    localStorage.setItem('objection-context', val);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => message.success('Copied — say it like this'));
  };

  const sectionCard = {
    borderRadius: 16,
    border: `1px solid ${isDark ? '#2E2C38' : '#E8E6E1'}`,
    boxShadow: isDark
      ? '0 2px 8px rgba(0,0,0,0.3)'
      : '0 2px 8px rgba(0,0,0,0.06)',
  };

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 480,
      margin: '0 auto',
      paddingBottom: 40,
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: isDark ? 'rgba(20, 19, 24, 0.95)' : 'rgba(248, 247, 244, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${isDark ? '#2E2C38' : '#E8E6E1'}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/favicon.png" alt="Objection Navigator" width={26} height={26} />
          <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#E8E6EF' : '#2D2A33' }}>
            Objection Navigator
          </span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <Badge count={favorites.length} size="small" offset={[-4, 4]}>
            <Button
              shape="circle"
              icon={<StarOutlined />}
              onClick={() => setDrawerOpen(true)}
              size="middle"
            />
          </Badge>
          <Button
            shape="circle"
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={onToggleTheme}
            size="middle"
          />
        </div>
      </header>

      {/* Main content */}
      <div style={{ flex: 1, padding: '16px 16px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>

        <Text type="secondary" style={{ fontSize: 14, textAlign: 'center', display: 'block' }}>
          Real tactics for real objections — keep them on the line.
        </Text>

        {/* Search */}
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search objections..."
          allowClear
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="large"
        />

        {/* Objection Picker Card */}
        <Card
          size="small"
          style={sectionCard}
          styles={{ body: { padding: '14px 16px' } }}
        >
          <Text strong style={{ display: 'block', marginBottom: 10, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: isDark ? '#9B97A8' : '#6E6B78' }}>
            {isSearching ? 'Search Results' : 'Pick an objection'}
          </Text>

          {!isSearching && (
            <Select
              value={activeCategory}
              onChange={val => {
                setActiveCategory(val);
                setSelectedId(null);
              }}
              style={{ width: '100%', marginBottom: 12 }}
              options={CATEGORIES.map(c => ({
                value: c.key,
                label: `${c.label} (${objectionsByCategory[c.key]?.length ?? 0})`,
              }))}
            />
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {displayedObjections.length === 0 && (
              <Text type="secondary" style={{ padding: '8px 0' }}>No objections match your search.</Text>
            )}
            {displayedObjections.map(o => (
              <Button
                key={o.id}
                type={selectedId === o.id ? 'primary' : 'default'}
                onClick={() => handleSelect(o.id)}
                style={{
                  borderRadius: 20,
                  fontWeight: selectedId === o.id ? 600 : 400,
                  height: 'auto',
                  padding: '6px 14px',
                  fontSize: 13,
                  whiteSpace: 'normal',
                  textAlign: 'left',
                }}
                size="small"
              >
                "{o.label}"
              </Button>
            ))}
          </div>
        </Card>

        {/* Communication Mode — vertical radio list */}
        {selected && (
          <Card
            size="small"
            style={sectionCard}
            styles={{ body: { padding: '14px 16px' } }}
          >
            <Text strong style={{ display: 'block', marginBottom: 10, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: isDark ? '#9B97A8' : '#6E6B78' }}>
              Communication mode
            </Text>
            <Radio.Group
              value={context}
              onChange={e => handleContextChange(e.target.value)}
              style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              {CONTEXTS.map(c => (
                <Radio
                  key={c.key}
                  value={c.key}
                  style={{
                    padding: '6px 8px',
                    borderRadius: 8,
                    background: context === c.key
                      ? (isDark ? 'rgba(139, 124, 247, 0.1)' : 'rgba(107, 92, 231, 0.06)')
                      : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  {c.label}
                </Radio>
              ))}
            </Radio.Group>
          </Card>
        )}

        {/* Responses */}
        <div ref={responsesRef}>
          {selected && (
            <Card
              size="small"
              style={sectionCard}
              styles={{ body: { padding: '14px 16px' } }}
            >
              <Text strong style={{ display: 'block', marginBottom: 12, fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: isDark ? '#9B97A8' : '#6E6B78' }}>
                Say this:
              </Text>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {responses.map((r, i) => {
                  const tactic = TACTICS[r.tactic];
                  const toneInfo = TONE_INFO[r.tone];
                  return (
                    <div
                      key={r.id}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 12,
                        background: isDark ? '#252330' : '#F8F7F4',
                        border: `1px solid ${isDark ? '#2E2C38' : '#E8E6E1'}`,
                        animation: `fadeSlideIn 0.3s ease ${i * 0.06}s both`,
                      }}
                    >
                      <div style={{ marginBottom: 8, display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                        <Tooltip title={toneInfo.description}>
                          <Tag
                            color={toneInfo.color}
                            style={{ borderRadius: 6, fontWeight: 600, fontSize: 11, cursor: 'help', margin: 0 }}
                          >
                            {r.tone}
                          </Tag>
                        </Tooltip>
                        <Tooltip title={tactic.description}>
                          <Tag
                            icon={<BulbOutlined />}
                            style={{
                              borderRadius: 6,
                              fontSize: 11,
                              cursor: 'help',
                              margin: 0,
                              background: isDark ? 'rgba(139, 124, 247, 0.1)' : 'rgba(107, 92, 231, 0.06)',
                              border: `1px solid ${isDark ? 'rgba(139, 124, 247, 0.2)' : 'rgba(107, 92, 231, 0.15)'}`,
                              color: isDark ? '#B8ADF9' : '#6B5CE7',
                            }}
                          >
                            {tactic.label}
                          </Tag>
                        </Tooltip>
                      </div>
                      <Paragraph style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 10 }}>
                        {r.text}
                      </Paragraph>
                      {/* Tactic tip */}
                      {'tip' in r && r.tip && (
                        <div style={{
                          fontSize: 12,
                          color: isDark ? '#9B97A8' : '#6E6B78',
                          fontStyle: 'italic',
                          padding: '8px 10px',
                          borderRadius: 8,
                          background: isDark ? 'rgba(139, 124, 247, 0.05)' : 'rgba(107, 92, 231, 0.03)',
                          borderLeft: `3px solid ${isDark ? '#8B7CF7' : '#6B5CE7'}`,
                          marginBottom: 10,
                          lineHeight: 1.5,
                        }}>
                          {(r as any).tip}
                        </div>
                      )}
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
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, padding: '12px 0 8px', fontSize: 12 }}>
          <a
            href="#/privacy"
            style={{
              color: isDark ? '#9B97A8' : '#6E6B78',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = isDark ? '#E8E6EF' : '#2D2A33')}
            onMouseLeave={e => (e.currentTarget.style.color = isDark ? '#9B97A8' : '#6E6B78')}
          >
            Privacy
          </a>
        </div>
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
                  <Tag color={TONE_INFO[f.tone as keyof typeof TONE_INFO]?.color ?? '#999'} style={{ borderRadius: 6, fontWeight: 600, fontSize: 11 }}>
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
