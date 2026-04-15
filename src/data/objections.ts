export type ToneLabel = 'Direct' | 'Soft' | 'Reframe' | 'Curious' | 'Value-focused';
export type ContextType = 'cold-call' | 'text' | 'email' | 'in-person' | 'follow-up';

export interface Response {
  id: string;
  text: string;
  tone: ToneLabel;
}

export interface Objection {
  id: string;
  label: string;
  keywords: string[];
  responses: Record<ContextType, Response[]>;
}

export const CONTEXTS: { key: ContextType; label: string }[] = [
  { key: 'cold-call', label: 'Cold Call' },
  { key: 'text', label: 'Text' },
  { key: 'email', label: 'Email' },
  { key: 'in-person', label: 'In Person' },
  { key: 'follow-up', label: 'Follow-up' },
];

export const objections: Objection[] = [
  {
    id: 'too-expensive',
    label: 'Too expensive',
    keywords: ['price', 'cost', 'expensive', 'budget', 'afford', 'cheap', 'money'],
    responses: {
      'cold-call': [
        { id: 'te-cc-1', text: "What are you comparing it to?", tone: 'Curious' },
        { id: 'te-cc-2', text: "Most of our clients said the same thing — until they saw what it actually saved them. Want a quick example?", tone: 'Reframe' },
        { id: 'te-cc-3', text: "We can adjust scope, but the bigger cost is usually doing nothing.", tone: 'Direct' },
      ],
      'text': [
        { id: 'te-tx-1', text: "What would make the price feel worth it? I can adjust scope.", tone: 'Curious' },
        { id: 'te-tx-2', text: "What's it costing you right now to not have this handled?", tone: 'Reframe' },
        { id: 'te-tx-3', text: "Most clients say that before they see the ROI breakdown — want me to send it?", tone: 'Direct' },
      ],
      'email': [
        { id: 'te-em-1', text: "I understand budget matters. Most of our clients recoup the investment within 60 days. I can share a few examples if that would help.", tone: 'Value-focused' },
        { id: 'te-em-2', text: "We offer flexible options — I could put together a scaled-down proposal that fits your current budget.", tone: 'Soft' },
        { id: 'te-em-3', text: "What's the cost of the status quo? Most of our clients find the real expense is the revenue they're leaving on the table.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'te-ip-1', text: "Is it the total price, or is it whether you'll see a return?", tone: 'Curious' },
        { id: 'te-ip-2', text: "The businesses that invest in this grow faster than the ones that wait. What would make it a no-brainer for you?", tone: 'Direct' },
        { id: 'te-ip-3', text: "We can start smaller and scale up once you see results.", tone: 'Soft' },
      ],
      'follow-up': [
        { id: 'te-fu-1', text: "I put together a comparison showing what our clients typically save vs. spend. Worth a quick look?", tone: 'Value-focused' },
        { id: 'te-fu-2', text: "If budget is still tight, we have a lighter option that might work as a starting point.", tone: 'Soft' },
        { id: 'te-fu-3', text: "Have you had a chance to weigh the cost against what you're spending on the current setup?", tone: 'Reframe' },
      ],
    },
  },
  {
    id: 'dont-need',
    label: "We don't need that",
    keywords: ['need', 'necessary', 'dont need', 'not needed', 'unnecessary'],
    responses: {
      'cold-call': [
        { id: 'dn-cc-1', text: "What does your current setup look like for this?", tone: 'Curious' },
        { id: 'dn-cc-2', text: "How are you handling that right now?", tone: 'Curious' },
        { id: 'dn-cc-3', text: "Most businesses don't realize they need it until they see what they're missing. Can I show you a quick example?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'dn-tx-1', text: "How are you handling that right now?", tone: 'Curious' },
        { id: 'dn-tx-2', text: "Most people who say that are doing fine — but they're surprised how much easier it could be.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'dn-em-1', text: "I'd love to learn more about how you're currently managing this — sometimes there are gaps that aren't obvious until someone points them out.", tone: 'Curious' },
        { id: 'dn-em-2', text: "Many of our clients felt the same way initially. Would a brief case study from a similar business be useful?", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'dn-ip-1', text: "Walk me through how you're doing it now — I might see something you're not seeing.", tone: 'Direct' },
        { id: 'dn-ip-2', text: "Is it that you don't need it, or that it's not a priority right now? Those are different things.", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'dn-fu-1', text: "I came across something that might change your mind. Two minutes?", tone: 'Direct' },
        { id: 'dn-fu-2', text: "A business similar to yours just got started with us and saw results in the first week. Thought you'd want to know.", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'already-have',
    label: 'We already have something',
    keywords: ['already', 'have', 'existing', 'current', 'using', 'provider', 'agency'],
    responses: {
      'cold-call': [
        { id: 'ah-cc-1', text: "Are you happy with the results you're getting?", tone: 'Curious' },
        { id: 'ah-cc-2', text: "I'm not here to replace what's working — just curious if there are gaps I could help fill.", tone: 'Soft' },
        { id: 'ah-cc-3', text: "What made you choose them? A lot of people end up switching once they compare.", tone: 'Direct' },
      ],
      'text': [
        { id: 'ah-tx-1', text: "Are you happy with what you're getting? A lot of people have something but aren't thrilled with it.", tone: 'Curious' },
        { id: 'ah-tx-2', text: "If you ever want a second opinion or a comparison, I'm here.", tone: 'Soft' },
      ],
      'email': [
        { id: 'ah-em-1', text: "I'm not looking to replace what's working — but I'd love to understand what you're using so I can see if there's anything complementary.", tone: 'Soft' },
        { id: 'ah-em-2', text: "When was the last time you benchmarked your current solution? Markets shift quickly and what worked a year ago might be leaving value on the table.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'ah-ip-1', text: "How's it performing for you? If it's working great, I'll back off. But if there's room for improvement, let's talk.", tone: 'Direct' },
        { id: 'ah-ip-2', text: "What's your biggest frustration with the current setup?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ah-fu-1', text: "Still happy with your current setup, or has anything changed?", tone: 'Curious' },
        { id: 'ah-fu-2', text: "One of our clients recently switched from a similar setup and saw a 40% improvement. Want the details?", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'social-media',
    label: 'We get clients through social media',
    keywords: ['facebook', 'social media', 'instagram', 'tiktok', 'ads', 'meta', 'social', 'reels'],
    responses: {
      'cold-call': [
        { id: 'sm-cc-1', text: "That's great for reach. What happens after someone finds you there — what's their next step?", tone: 'Curious' },
        { id: 'sm-cc-2', text: "Are those leads converting, or do some fall off before they book?", tone: 'Direct' },
        { id: 'sm-cc-3', text: "What we usually help with is what happens after someone finds you — making sure they actually convert.", tone: 'Reframe' },
      ],
      'text': [
        { id: 'sm-tx-1', text: "Are you converting most of those leads, or do some drop off?", tone: 'Curious' },
        { id: 'sm-tx-2', text: "Social is solid for awareness. We help make sure those leads don't slip through the cracks.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'sm-em-1', text: "Social is great for visibility — but many businesses leave money on the table by not having a system to capture and convert those leads. That's where we come in.", tone: 'Value-focused' },
        { id: 'sm-em-2', text: "What's your conversion rate from social lead to paying client? If there's a gap, that's exactly what we help close.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'sm-ip-1', text: "If the algorithm changed tomorrow, what's your backup plan?", tone: 'Direct' },
        { id: 'sm-ip-2', text: "We actually work well alongside social — we help you convert the traffic you're already getting.", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'sm-fu-1', text: "Have your social results been consistent, or have you noticed any dips lately?", tone: 'Curious' },
        { id: 'sm-fu-2', text: "A lot of businesses using social pair it with what we do and see even better results. Worth a quick chat?", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'think-about-it',
    label: 'I need to think about it',
    keywords: ['think', 'consider', 'decide', 'time', 'think about', 'mull'],
    responses: {
      'cold-call': [
        { id: 'ta-cc-1', text: "What specifically do you want to think through? I might be able to answer that right now.", tone: 'Direct' },
        { id: 'ta-cc-2', text: "'Think about it' usually means there's a specific concern. What's yours?", tone: 'Curious' },
        { id: 'ta-cc-3', text: "Want me to send a quick summary so you have something to reference?", tone: 'Soft' },
      ],
      'text': [
        { id: 'ta-tx-1', text: "What part are you unsure about? I can clarify right now.", tone: 'Curious' },
        { id: 'ta-tx-2', text: "Want me to follow up in a couple days?", tone: 'Soft' },
      ],
      'email': [
        { id: 'ta-em-1', text: "If it would help, I can hop on a quick call to walk through any questions. Sometimes that makes the decision a lot easier.", tone: 'Soft' },
        { id: 'ta-em-2', text: "Is there a specific part of the proposal you'd like more clarity on? I want to make sure you have everything you need.", tone: 'Curious' },
      ],
      'in-person': [
        { id: 'ta-ip-1', text: "What's the main thing you're weighing? Let's talk through it right now.", tone: 'Direct' },
        { id: 'ta-ip-2', text: "Most people who say that have one specific concern. What's yours?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ta-fu-1', text: "Have you had a chance to think it over? What questions came up?", tone: 'Curious' },
        { id: 'ta-fu-2', text: "Sometimes a quick conversation makes the decision way easier. Want to hop on a call?", tone: 'Direct' },
      ],
    },
  },
  {
    id: 'send-info',
    label: 'Send me some information',
    keywords: ['send', 'info', 'information', 'brochure', 'details', 'email me'],
    responses: {
      'cold-call': [
        { id: 'si-cc-1', text: "So I send you the right stuff — what specifically are you most interested in?", tone: 'Curious' },
        { id: 'si-cc-2', text: "The info is pretty general. A five-minute call would tell you more than any PDF. Can we do that this week?", tone: 'Direct' },
        { id: 'si-cc-3', text: "Sure. And just so it doesn't end up in the pile — what would make you actually read it?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'si-tx-1', text: "What's the best email? Anything specific you want me to highlight?", tone: 'Soft' },
        { id: 'si-tx-2', text: "Real talk — a 5-min call will tell you way more. Open to that?", tone: 'Direct' },
      ],
      'email': [
        { id: 'si-em-1', text: "Before I send anything — tell me about your current situation so I can tailor it. I don't want to bury you in generic material.", tone: 'Curious' },
        { id: 'si-em-2', text: "I've attached a brief overview. That said, a quick 10-minute call is usually the best way to see if we're a fit. Open to that?", tone: 'Direct' },
      ],
      'in-person': [
        { id: 'si-ip-1', text: "Before I go — what's the one thing you'd need to see in that info to move forward?", tone: 'Direct' },
        { id: 'si-ip-2', text: "Is there something specific holding you back, or do you genuinely want more details?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'si-fu-1', text: "Did you get a chance to look over what I sent? I can walk through it if that's easier.", tone: 'Direct' },
        { id: 'si-fu-2', text: "Most people find a quick call more useful than reading docs. Want to set one up?", tone: 'Reframe' },
      ],
    },
  },
  {
    id: 'maybe-later',
    label: 'Maybe later',
    keywords: ['later', 'not now', 'future', 'someday', 'next quarter', 'next year'],
    responses: {
      'cold-call': [
        { id: 'ml-cc-1', text: "When you say later — weeks or months? I just want to follow up at the right time.", tone: 'Curious' },
        { id: 'ml-cc-2', text: "Most of our clients wish they'd started sooner. What would need to change for the timing to feel right?", tone: 'Reframe' },
        { id: 'ml-cc-3', text: "Can I check back in two weeks?", tone: 'Soft' },
      ],
      'text': [
        { id: 'ml-tx-1', text: "When's a good time to circle back?", tone: 'Soft' },
        { id: 'ml-tx-2', text: "What would need to change for the timing to feel right?", tone: 'Curious' },
      ],
      'email': [
        { id: 'ml-em-1', text: "When would be a good time for me to follow up? I'd rather reach out when it's actually relevant.", tone: 'Soft' },
        { id: 'ml-em-2', text: "The businesses that start now tend to be in a much stronger position by the time 'later' arrives.", tone: 'Reframe' },
      ],
      'in-person': [
        { id: 'ml-ip-1', text: "What would make 'later' turn into 'now'?", tone: 'Curious' },
        { id: 'ml-ip-2', text: "I hear 'later' a lot, and it usually means 'I'm not convinced yet.' What would convince you?", tone: 'Direct' },
      ],
      'follow-up': [
        { id: 'ml-fu-1', text: "Has anything changed on your end since we last spoke?", tone: 'Curious' },
        { id: 'ml-fu-2', text: "Is now a better time, or should I check back later?", tone: 'Soft' },
      ],
    },
  },
  {
    id: 'too-busy',
    label: "I'm too busy right now",
    keywords: ['busy', 'swamped', 'overwhelmed', 'no time', 'slammed', 'hectic'],
    responses: {
      'cold-call': [
        { id: 'tb-cc-1', text: "Can I have 60 seconds to see if it's even worth a longer conversation?", tone: 'Direct' },
        { id: 'tb-cc-2', text: "When's a better time? I'll keep it brief.", tone: 'Soft' },
        { id: 'tb-cc-3', text: "That's actually why I'm calling — most of our clients come to us because they're too busy to handle this stuff themselves.", tone: 'Reframe' },
      ],
      'text': [
        { id: 'tb-tx-1', text: "When's a better time? I'll be quick.", tone: 'Soft' },
        { id: 'tb-tx-2', text: "That's usually a sign you need this more, not less. When can we grab 5 min?", tone: 'Reframe' },
      ],
      'email': [
        { id: 'tb-em-1', text: "I know your time is valuable. We help busy business owners get more done in less time. If that's relevant, let's find 15 minutes.", tone: 'Direct' },
        { id: 'tb-em-2', text: "I'll follow up in a couple of weeks. Here's a quick overview in case you find a spare moment.", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'tb-ip-1', text: "Is it that you're too busy to talk, or too busy to take on something new? Because what we do actually frees up your time.", tone: 'Curious' },
        { id: 'tb-ip-2', text: "Let me leave you with one thing to think about — and I'll follow up when things calm down.", tone: 'Soft' },
      ],
      'follow-up': [
        { id: 'tb-fu-1', text: "Things still hectic, or is there room for a quick chat?", tone: 'Curious' },
        { id: 'tb-fu-2', text: "Still buried? That might actually be the best reason to talk.", tone: 'Reframe' },
      ],
    },
  },
  {
    id: 'ask-partner',
    label: 'I need to ask my partner / team',
    keywords: ['partner', 'team', 'boss', 'husband', 'wife', 'spouse', 'cofounder', 'business partner'],
    responses: {
      'cold-call': [
        { id: 'ap-cc-1', text: "Would it help if I joined a quick call with both of you? That way they get the full picture.", tone: 'Direct' },
        { id: 'ap-cc-2', text: "What do you think their main concern will be? I can help you address it.", tone: 'Curious' },
        { id: 'ap-cc-3', text: "Can I send you a one-page summary you can share with them?", tone: 'Value-focused' },
      ],
      'text': [
        { id: 'ap-tx-1', text: "What do you think they'll want to know? I can help you answer that.", tone: 'Curious' },
        { id: 'ap-tx-2', text: "Want me to put together a quick summary you can forward?", tone: 'Soft' },
      ],
      'email': [
        { id: 'ap-em-1', text: "Would it help if I prepared a brief summary that addresses common questions? That way your partner has the context they need.", tone: 'Value-focused' },
        { id: 'ap-em-2', text: "I'm happy to set up a quick call with both of you so everyone's on the same page.", tone: 'Direct' },
      ],
      'in-person': [
        { id: 'ap-ip-1', text: "What do you think their biggest concern will be? Let's talk through it now so you're prepared.", tone: 'Direct' },
        { id: 'ap-ip-2', text: "Is your partner involved in the day-to-day, or is this more of a financial decision for them?", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'ap-fu-1', text: "Did you get a chance to talk to your partner? What questions came up?", tone: 'Curious' },
        { id: 'ap-fu-2', text: "Would it help if I set up a brief call with both of you?", tone: 'Direct' },
      ],
    },
  },
  {
    id: 'enough-clients',
    label: 'We already have enough clients',
    keywords: ['enough', 'full', 'capacity', 'clients', 'booked', 'plenty'],
    responses: {
      'cold-call': [
        { id: 'ec-cc-1', text: "Are they all the right kind of clients, or are some more headache than they're worth?", tone: 'Curious' },
        { id: 'ec-cc-2', text: "At this stage it's not about more clients — it's about better ones.", tone: 'Reframe' },
        { id: 'ec-cc-3', text: "You're in a position to be selective. What would your ideal client look like?", tone: 'Curious' },
      ],
      'text': [
        { id: 'ec-tx-1', text: "Are they all the kind of clients you actually want?", tone: 'Curious' },
        { id: 'ec-tx-2', text: "We usually help at this stage with getting higher-quality clients, not more.", tone: 'Reframe' },
      ],
      'email': [
        { id: 'ec-em-1', text: "At this stage, most businesses aren't looking for more clients — they're looking for better ones. Higher value, easier to work with. Is that worth exploring?", tone: 'Reframe' },
        { id: 'ec-em-2', text: "What happens if a few of those clients leave? Having a steady pipeline means you're never scrambling.", tone: 'Value-focused' },
      ],
      'in-person': [
        { id: 'ec-ip-1', text: "Are you turning people away, or are you stretched thin? Those are very different situations.", tone: 'Direct' },
        { id: 'ec-ip-2', text: "Having enough clients now doesn't mean you will in six months. What's your pipeline look like?", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'ec-fu-1', text: "Still fully booked? Things can shift quickly.", tone: 'Curious' },
        { id: 'ec-fu-2', text: "Even if you're full now, it might be worth setting up a system so you're never scrambling later.", tone: 'Value-focused' },
      ],
    },
  },
  {
    id: 'do-manually',
    label: 'We do it manually now',
    keywords: ['manual', 'manually', 'ourselves', 'in-house', 'diy', 'do it ourselves', 'handle it'],
    responses: {
      'cold-call': [
        { id: 'dm-cc-1', text: "How much time are you spending on it each week? That time has a cost.", tone: 'Curious' },
        { id: 'dm-cc-2', text: "Most of our clients started that way — they switched when they realized how much time they were losing.", tone: 'Reframe' },
        { id: 'dm-cc-3', text: "If it's eating hours that could go toward revenue, might be worth comparing.", tone: 'Value-focused' },
      ],
      'text': [
        { id: 'dm-tx-1', text: "How much time does that take you each week? Most people are surprised when they add it up.", tone: 'Curious' },
        { id: 'dm-tx-2', text: "We help people get that time back so they can focus on what actually makes money.", tone: 'Value-focused' },
      ],
      'email': [
        { id: 'dm-em-1', text: "What's your hourly rate? Every hour spent on this is an hour not spent on revenue-generating work.", tone: 'Reframe' },
        { id: 'dm-em-2', text: "Many of our clients started the same way. The tipping point comes when the manual approach stops scaling. I can show you what the transition looks like.", tone: 'Soft' },
      ],
      'in-person': [
        { id: 'dm-ip-1', text: "Is it sustainable, or are you starting to feel the weight of it?", tone: 'Curious' },
        { id: 'dm-ip-2', text: "If you could get those hours back, what would you do with them?", tone: 'Reframe' },
      ],
      'follow-up': [
        { id: 'dm-fu-1', text: "Still handling this manually? I can show you how others have made the switch.", tone: 'Direct' },
        { id: 'dm-fu-2', text: "Has the manual approach slowed you down at all? That's usually when people reach out.", tone: 'Curious' },
      ],
    },
  },
  {
    id: 'not-ready',
    label: "I'm not ready to commit",
    keywords: ['commit', 'ready', 'commitment', 'contract', 'lock in', 'sign', 'decide'],
    responses: {
      'cold-call': [
        { id: 'nr-cc-1', text: "What would need to happen for you to feel ready?", tone: 'Curious' },
        { id: 'nr-cc-2', text: "There's no long-term lock-in. We could start small and see how it goes.", tone: 'Soft' },
        { id: 'nr-cc-3', text: "Waiting has a cost too. What's it costing you to not have this handled?", tone: 'Reframe' },
      ],
      'text': [
        { id: 'nr-tx-1', text: "What would make you feel more comfortable?", tone: 'Curious' },
        { id: 'nr-tx-2', text: "We don't do long contracts — you can start small and see if it works.", tone: 'Value-focused' },
      ],
      'email': [
        { id: 'nr-em-1', text: "We offer a flexible starting option with no long-term contract — just results. Would you be open to exploring that?", tone: 'Soft' },
        { id: 'nr-em-2', text: "What helped our other clients was seeing a clear plan with measurable outcomes. Would a proposal like that be useful?", tone: 'Value-focused' },
      ],
      'in-person': [
        { id: 'nr-ip-1', text: "What's holding you back? I'd rather address it now than have it sit.", tone: 'Direct' },
        { id: 'nr-ip-2', text: "Is it the commitment itself, or a specific concern? We can structure this to minimize your risk.", tone: 'Curious' },
      ],
      'follow-up': [
        { id: 'nr-fu-1', text: "Has anything changed since we last spoke?", tone: 'Curious' },
        { id: 'nr-fu-2', text: "We've since added a no-commitment trial option. Interested?", tone: 'Value-focused' },
      ],
    },
  },
];
