export type ToneLabel = 'Empathetic' | 'Consultative' | 'Challenger' | 'Assumptive' | 'Urgency';
export type ContextType = 'cold-call' | 'text' | 'email' | 'in-person' | 'follow-up';
export type CategoryType = 'price-budget' | 'timing-priority' | 'trust-credibility' | 'competition-alternatives' | 'authority-decision';

export type TacticType =
  | 'feel-felt-found'
  | 'isolate'
  | 'takeaway'
  | 'negative-reverse'
  | 'future-pace'
  | 'social-proof'
  | 'cost-of-inaction'
  | 'reframe'
  | 'assumptive-close'
  | 'downsell'
  | 'permission-based'
  | 'labeling'
  | 'mirroring'
  | 'calibrated-question'
  | 'no-oriented'
  | 'short-time-ask'
  | 'anchor';

export interface Tactic {
  key: TacticType;
  label: string;
  description: string;
}

export const TACTICS: Record<TacticType, Tactic> = {
  'feel-felt-found': {
    key: 'feel-felt-found',
    label: 'Feel-Felt-Found',
    description: 'Empathy bridge — acknowledge their feeling, relate to others who felt the same, share what those people discovered.',
  },
  'isolate': {
    key: 'isolate',
    label: 'Isolate the Objection',
    description: 'Pin down the one real concern. If you solve that one thing, everything else falls into place.',
  },
  'takeaway': {
    key: 'takeaway',
    label: 'Takeaway Close',
    description: 'Pull back slightly — "maybe this isn\'t for you." Removes pressure, creates curiosity.',
  },
  'negative-reverse': {
    key: 'negative-reverse',
    label: 'Negative Reverse',
    description: 'Agree with their objection to disarm them. "You\'re probably right, it might not be worth it." Then let curiosity do the work.',
  },
  'future-pace': {
    key: 'future-pace',
    label: 'Future Pacing',
    description: 'Paint the picture of life after they say yes. Makes the outcome feel real and attainable.',
  },
  'social-proof': {
    key: 'social-proof',
    label: 'Social Proof',
    description: 'Reference specific results. Not "our clients" — give real numbers, real timelines, real industries.',
  },
  'cost-of-inaction': {
    key: 'cost-of-inaction',
    label: 'Cost of Inaction',
    description: 'Shift the question from "can I afford this?" to "can I afford NOT to do this?"',
  },
  'reframe': {
    key: 'reframe',
    label: 'Reframe',
    description: 'Change how they see the situation. Turn an objection into a reason to move forward.',
  },
  'assumptive-close': {
    key: 'assumptive-close',
    label: 'Assumptive Close',
    description: 'Skip past the "if" and go straight to the "when." Act like the decision is already made.',
  },
  'downsell': {
    key: 'downsell',
    label: 'Downsell / Pilot',
    description: 'Lower the barrier. Offer a smaller commitment to get them started. Once they\'re in, they rarely leave.',
  },
  'permission-based': {
    key: 'permission-based',
    label: 'Permission-Based',
    description: 'Ask for permission before pushing. "Would it be okay if I..." — builds trust, reduces resistance.',
  },
  'labeling': {
    key: 'labeling',
    label: 'Labeling (Voss)',
    description: 'Chris Voss FBI technique — name the emotion. "It seems like..." or "It sounds like..." Makes people feel deeply heard.',
  },
  'mirroring': {
    key: 'mirroring',
    label: 'Mirroring (Voss)',
    description: 'Chris Voss FBI technique — repeat the last 1-3 words they said, then go silent. Forces them to elaborate and reveal their real concern.',
  },
  'calibrated-question': {
    key: 'calibrated-question',
    label: 'Calibrated Question (Voss)',
    description: 'Chris Voss FBI technique — "How" and "What" questions that make them solve the problem for you. Never use "Why" — it sounds accusatory.',
  },
  'no-oriented': {
    key: 'no-oriented',
    label: '"No"-Oriented Question (Voss)',
    description: 'Chris Voss FBI technique — frame questions so the answer is "no." People feel safe saying no. "Would it be a terrible idea if...?"',
  },
  'short-time-ask': {
    key: 'short-time-ask',
    label: 'Short Time Ask',
    description: 'Ask for a tiny amount of their time. 30 seconds, 2 minutes. The small commitment makes it hard to refuse.',
  },
  'anchor': {
    key: 'anchor',
    label: 'Anchor',
    description: 'Set expectations high first, then present the real offer. The contrast makes the actual price feel reasonable.',
  },
};

export interface Response {
  id: string;
  text: string;
  tone: ToneLabel;
  tactic: TacticType;
  tip?: string;
}

export interface Objection {
  id: string;
  label: string;
  category: CategoryType;
  keywords: string[];
  responses: Record<ContextType, Response[]>;
}

export const CATEGORIES: { key: CategoryType; label: string }[] = [
  { key: 'price-budget', label: 'Price & Budget' },
  { key: 'timing-priority', label: 'Timing & Priority' },
  { key: 'trust-credibility', label: 'Trust & Credibility' },
  { key: 'competition-alternatives', label: 'Competition & Alternatives' },
  { key: 'authority-decision', label: 'Authority & Decision' },
];

export const CONTEXTS: { key: ContextType; label: string }[] = [
  { key: 'cold-call', label: 'Cold Call' },
  { key: 'text', label: 'Text' },
  { key: 'email', label: 'Email' },
  { key: 'in-person', label: 'In Person' },
  { key: 'follow-up', label: 'Follow-up' },
];

export const TONE_INFO: Record<ToneLabel, { color: string; description: string }> = {
  Empathetic: { color: '#52A87E', description: 'Warm and understanding — builds trust, no pressure' },
  Consultative: { color: '#5B8DEF', description: 'Smart questions that guide them to their own answer' },
  Challenger: { color: '#E8963C', description: 'Respectful pushback — makes them rethink their position' },
  Assumptive: { color: '#8B7CF7', description: 'Confident and forward — treats the deal as a given' },
  Urgency: { color: '#E8453C', description: 'Creates time pressure — use sparingly and honestly' },
};

export const objections: Objection[] = [
  // ═══════════════════════════════════════════
  // PRICE & BUDGET
  // ═══════════════════════════════════════════
  {
    id: 'too-expensive',
    label: 'Too expensive',
    category: 'price-budget',
    keywords: ['price', 'cost', 'expensive', 'budget', 'afford', 'cheap', 'money'],
    responses: {
      'cold-call': [
        { id: 'te-cc-1', text: "Too expensive...", tone: 'Consultative', tactic: 'mirroring', tip: 'Repeat their words and go silent. They\'ll fill the silence with their real concern — is it the total? The monthly? Compared to what?' },
        { id: 'te-cc-2', text: "It sounds like you've been quoted high numbers before and didn't see the return. Is that what's happening here?", tone: 'Empathetic', tactic: 'labeling', tip: 'Label the emotion behind the objection. You\'re not guessing — you\'re making them feel understood.' },
        { id: 'te-cc-3', text: "What would it be worth to you if this problem was solved by next month?", tone: 'Challenger', tactic: 'calibrated-question', tip: 'Calibrated "what" question — makes them calculate the value themselves instead of you pitching it.' },
      ],
      'text': [
        { id: 'te-tx-1', text: "Totally get it. What if we started with just the core piece? You'd see results before committing to the full thing.", tone: 'Empathetic', tactic: 'downsell' },
        { id: 'te-tx-2', text: "Fair — what part of the price doesn't sit right? I can probably fix that.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'te-tx-3', text: "How much is this problem costing you every month you don't fix it?", tone: 'Challenger', tactic: 'cost-of-inaction' },
      ],
      'email': [
        { id: 'te-em-1', text: "I understand — and I won't pretend price doesn't matter. A landscaping company we work with had the same concern. They started with our smallest package at $X/month and saw a 3x return within 90 days. Happy to put together something similar for you.", tone: 'Empathetic', tactic: 'social-proof', tip: 'Always use specific industries, specific numbers, specific timelines. "Our clients" means nothing.' },
        { id: 'te-em-2', text: "Would it be a terrible idea to spend 10 minutes looking at what this is actually costing you right now? I'll bring the numbers — you decide if they're worth addressing.", tone: 'Consultative', tactic: 'no-oriented', tip: '"Would it be a terrible idea" is a Voss technique. People feel safe saying no — and "no" to a negative question means yes.' },
        { id: 'te-em-3', text: "We have a starter option that gets you moving without the full price tag. Most people start there and upgrade once they see the numbers.", tone: 'Empathetic', tactic: 'downsell' },
      ],
      'in-person': [
        { id: 'te-ip-1', text: "Is it the total number that bothers you, or is it more about whether you'll see a return? Because those are different conversations.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'te-ip-2', text: "Picture this — six months from now, this problem is handled, you've got those hours back, revenue is up. What's that worth?", tone: 'Challenger', tactic: 'future-pace' },
        { id: 'te-ip-3', text: "We can absolutely start smaller. Get a win under your belt first, then decide if you want to go bigger.", tone: 'Empathetic', tactic: 'downsell' },
      ],
      'follow-up': [
        { id: 'te-fu-1', text: "I put together a side-by-side — what you're spending now vs. what 6 months with us looks like. The gap might surprise you. Can I walk you through it?", tone: 'Consultative', tactic: 'cost-of-inaction' },
        { id: 'te-fu-2', text: "If budget is still the hangup, we've got a lighter option that gets you in the door. Want me to send it?", tone: 'Empathetic', tactic: 'downsell' },
        { id: 'te-fu-3', text: "It seems like the price is less about the money and more about the risk. Is that fair?", tone: 'Empathetic', tactic: 'labeling', tip: 'Often "too expensive" really means "I\'m scared it won\'t work." Label the real emotion.' },
      ],
    },
  },
  {
    id: 'cant-afford',
    label: "We can't afford it right now",
    category: 'price-budget',
    keywords: ['afford', 'cash flow', 'tight', 'budget', 'strapped', 'funds'],
    responses: {
      'cold-call': [
        { id: 'ca-cc-1', text: "Can't afford it right now...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror and pause. "Right now" is doing a lot of work in that sentence — let them tell you what they really mean.' },
        { id: 'ca-cc-2', text: "It sounds like cash flow is tight and the last thing you want is another expense that doesn't pay for itself.", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'ca-cc-3', text: "What if it paid for itself in the first 30 days? I know that sounds like a pitch, but I have a pest control client who literally recouped month one.", tone: 'Challenger', tactic: 'social-proof' },
      ],
      'text': [
        { id: 'ca-tx-1', text: "Totally understand. We have a starter option — no big commitment, just enough to see if it moves the needle.", tone: 'Empathetic', tactic: 'downsell' },
        { id: 'ca-tx-2', text: "Is it the budget, or are you not sure it'll pay off? Those need different answers.", tone: 'Consultative', tactic: 'isolate' },
      ],
      'email': [
        { id: 'ca-em-1', text: "I hear you — and I'd never push someone into something that strains their budget. That said, a pest control company we work with was in the same spot. They started with our $X/month option and brought in enough new jobs in the first two weeks to cover it. Would it help to see how that would look for your business?", tone: 'Empathetic', tactic: 'social-proof' },
        { id: 'ca-em-2', text: "What if we structured it so you're not paying the full amount upfront? I have a couple of options that spread the cost out.", tone: 'Empathetic', tactic: 'downsell' },
      ],
      'in-person': [
        { id: 'ca-ip-1', text: "How much is this problem costing you every month you don't fix it? Even roughly. Because sometimes the 'can't afford it' thing flips when you see the real number.", tone: 'Challenger', tactic: 'cost-of-inaction' },
        { id: 'ca-ip-2', text: "Would it be unreasonable to try a 30-day pilot? Minimal cost, and if the numbers don't work, you walk.", tone: 'Consultative', tactic: 'no-oriented', tip: '"Would it be unreasonable" invites a "no" — and "no, that\'s not unreasonable" means they\'re in.' },
      ],
      'follow-up': [
        { id: 'ca-fu-1', text: "Budget still tight? I actually put together a smaller option since we last talked. Might be exactly what you need right now.", tone: 'Empathetic', tactic: 'downsell' },
        { id: 'ca-fu-2', text: "One thing worth thinking about — every month you wait, you're paying the cost of the problem without getting the solution. Happy to run those numbers if it helps.", tone: 'Challenger', tactic: 'cost-of-inaction' },
      ],
    },
  },
  {
    id: 'guarantee-results',
    label: 'Can you guarantee results?',
    category: 'price-budget',
    keywords: ['guarantee', 'results', 'promise', 'sure', 'certain', 'proof', 'risk'],
    responses: {
      'cold-call': [
        { id: 'gr-cc-1', text: "Guarantee results...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. They\'ll explain what "results" means to them — that\'s where the real conversation starts.' },
        { id: 'gr-cc-2', text: "It sounds like someone promised you results before and didn't deliver.", tone: 'Empathetic', tactic: 'labeling', tip: 'Label the history. Most people asking for guarantees have been burned. Name it.' },
        { id: 'gr-cc-3', text: "Anyone who guarantees specific results is lying to you. What I can show you is exactly what we've done for businesses like yours — real numbers, real timelines.", tone: 'Challenger', tactic: 'social-proof' },
      ],
      'text': [
        { id: 'gr-tx-1', text: "No guarantees — but I can show you receipts from people in your exact situation. Want to see?", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'gr-tx-2', text: "What would make you feel confident this is worth trying? I might have it.", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'email': [
        { id: 'gr-em-1', text: "I appreciate the directness. Anyone who guarantees specific numbers is overselling. What I can share is our track record — attached is a case study from a client in a similar industry who saw measurable results within 45 days. I'd rather let the work speak for itself than make promises.", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'gr-em-2', text: "Would it be a terrible idea to start with a 30-day pilot? No long-term commitment. You see real numbers before deciding anything. If it doesn't work, you walk.", tone: 'Consultative', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'gr-ip-1', text: "The honest answer is no one can. And you should run from anyone who does. But here's what I can do — show you three businesses like yours and what happened in the first 90 days.", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'gr-ip-2', text: "It sounds like you need to see proof before you believe it. That's smart. What if we did a small pilot — real results, real numbers — before you commit to anything?", tone: 'Empathetic', tactic: 'labeling' },
      ],
      'follow-up': [
        { id: 'gr-fu-1', text: "I put together a short case study from a client in your space. No promises, just what actually happened. 2 minutes of reading. Want it?", tone: 'Consultative', tactic: 'social-proof' },
        { id: 'gr-fu-2', text: "Still thinking about the risk? What if there was zero risk — 30-day pilot, no contract, you decide based on real numbers?", tone: 'Empathetic', tactic: 'downsell' },
      ],
    },
  },
  {
    id: 'just-price',
    label: 'Just give me the price',
    category: 'price-budget',
    keywords: ['price', 'quote', 'how much', 'cost', 'bottom line', 'number', 'ballpark'],
    responses: {
      'cold-call': [
        { id: 'jp-cc-1', text: "I can absolutely get you a number. Would it be unreasonable to ask two quick questions so I give you the right one instead of a guess?", tone: 'Consultative', tactic: 'no-oriented', tip: '"Would it be unreasonable" lets them feel in control while giving you permission to qualify.' },
        { id: 'jp-cc-2', text: "Our full package runs $X, but most people don't need all of that. What problem are you actually trying to solve?", tone: 'Consultative', tactic: 'anchor', tip: 'Lead with the higher number. Whatever you say next will feel like a deal by comparison.' },
        { id: 'jp-cc-3', text: "The price...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror "the price" and pause. They\'ll tell you why they\'re fixated on it — comparison shopping? Budget cap? Just kicking tires?' },
      ],
      'text': [
        { id: 'jp-tx-1', text: "Depends on what you need — can I ask a couple questions so I quote you right?", tone: 'Consultative', tactic: 'permission-based' },
        { id: 'jp-tx-2', text: "Starts at $X. The right price depends on your situation though. Quick call to nail it down?", tone: 'Assumptive', tactic: 'assumptive-close' },
      ],
      'email': [
        { id: 'jp-em-1', text: "I respect the directness. Our engagements range from $X to $Y depending on scope. To give you a number that actually means something, I'd need about 10 minutes to understand your situation. When works?", tone: 'Consultative', tactic: 'short-time-ask' },
        { id: 'jp-em-2', text: "I can send pricing — but a number without context doesn't tell you much. A 10-minute call lets me put together something tailored to what you actually need. Would that be a waste of your time?", tone: 'Challenger', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'jp-ip-1', text: "I'll give you a range right now — $X to $Y. The exact number depends on what you need, which we can figure out in about five minutes.", tone: 'Assumptive', tactic: 'anchor' },
        { id: 'jp-ip-2', text: "I'd rather give you the right price than a fast price. Can I ask two questions?", tone: 'Consultative', tactic: 'permission-based' },
      ],
      'follow-up': [
        { id: 'jp-fu-1', text: "I put together a custom quote based on what we talked about. Take a look — if the number works, we can get started this week.", tone: 'Assumptive', tactic: 'assumptive-close' },
        { id: 'jp-fu-2', text: "Here's the breakdown: $X/month, most clients see a return within 60 days. Questions?", tone: 'Assumptive', tactic: 'social-proof' },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // TIMING & PRIORITY
  // ═══════════════════════════════════════════
  {
    id: 'think-about-it',
    label: 'I need to think about it',
    category: 'timing-priority',
    keywords: ['think', 'consider', 'decide', 'time', 'think about', 'mull', 'sleep on'],
    responses: {
      'cold-call': [
        { id: 'ta-cc-1', text: "Think about it...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror and go silent. "Think about it" is almost never about thinking — it\'s about an unspoken concern. The silence draws it out.' },
        { id: 'ta-cc-2', text: "It sounds like something specific is holding you back. What is it?", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'ta-cc-3', text: "What would you need to see right now to feel confident enough to move forward today?", tone: 'Challenger', tactic: 'calibrated-question', tip: '"What would you need" puts them in the driver\'s seat. They tell you exactly how to close them.' },
      ],
      'text': [
        { id: 'ta-tx-1', text: "What part feels uncertain? I can probably clear it up in 30 seconds.", tone: 'Consultative', tactic: 'short-time-ask' },
        { id: 'ta-tx-2', text: "If I solved that one thing right now, would you be ready to go?", tone: 'Assumptive', tactic: 'isolate' },
      ],
      'email': [
        { id: 'ta-em-1', text: "Completely understand. But in my experience, 'think about it' usually means there's one specific thing that doesn't feel right. What is it? If I can address it now, I'd rather do that than lose you to the inbox black hole.", tone: 'Challenger', tactic: 'labeling' },
        { id: 'ta-em-2', text: "Would it be a terrible idea to hop on a 5-minute call? I can answer whatever's on your mind faster than email. And if it's still a no, that's totally fine.", tone: 'Consultative', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'ta-ip-1', text: "What's the one thing you're chewing on? Let's solve it right now while we're both here.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'ta-ip-2', text: "It seems like there's something that isn't sitting right. What is it?", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'ta-ip-3', text: "If we took that one concern off the table, are you in?", tone: 'Assumptive', tactic: 'isolate', tip: 'Isolate + assumptive. Get them to name the blocker, solve it on the spot, close.' },
      ],
      'follow-up': [
        { id: 'ta-fu-1', text: "Hey — you mentioned you wanted to think it over. What came up? I'd rather help you work through it than let it sit.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'ta-fu-2', text: "Sometimes the thing you need isn't more time — it's more information. What would make this a clear yes or no?", tone: 'Challenger', tactic: 'reframe' },
      ],
    },
  },
  {
    id: 'maybe-later',
    label: 'Maybe later / Not right now',
    category: 'timing-priority',
    keywords: ['later', 'not now', 'future', 'someday', 'next quarter', 'next year', 'down the road'],
    responses: {
      'cold-call': [
        { id: 'ml-cc-1', text: "Not right now...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror "not right now" and wait. They\'ll explain what "later" actually means — budget cycle? Busy season? Just not interested?' },
        { id: 'ml-cc-2', text: "I understand timing matters. But let me ask — if we set timing aside for a second, is this something you'd want to do?", tone: 'Challenger', tactic: 'isolate', tip: 'Separate the timing objection from the value objection. If they don\'t want it even with perfect timing, the real objection is something else.' },
        { id: 'ml-cc-3', text: "What would need to change for this to move up the list?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'text': [
        { id: 'ml-tx-1', text: "Is it the timing, or is it the offer? Because I can fix one of those right now.", tone: 'Challenger', tactic: 'isolate' },
        { id: 'ml-tx-2', text: "I get it. But can I have 30 seconds to show you why waiting might cost more than starting?", tone: 'Consultative', tactic: 'short-time-ask' },
      ],
      'email': [
        { id: 'ml-em-1', text: "I respect that. Here's what I've seen though — the businesses that start now are in a much stronger position than the ones who wait for the 'right time.' A roofing company we work with waited six months. When they finally started, they said their only regret was not doing it sooner. Not pushing — just sharing what I've seen.", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'ml-em-2', text: "Would it be ridiculous to try a 2-week pilot? Minimal effort on your end. If nothing happens, you've lost nothing. If it works, you'll wish you started today.", tone: 'Consultative', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'ml-ip-1', text: "Later usually means there's a specific thing that's not clicking. What is it?", tone: 'Challenger', tactic: 'labeling' },
        { id: 'ml-ip-2', text: "I completely understand. But let me ask — every month you wait, the problem is still there. What's that costing you?", tone: 'Challenger', tactic: 'cost-of-inaction' },
        { id: 'ml-ip-3', text: "What if 'later' was today, but smaller? We start with just one piece, see if it works, and go from there.", tone: 'Empathetic', tactic: 'downsell' },
      ],
      'follow-up': [
        { id: 'ml-fu-1', text: "You mentioned the timing wasn't right. Has anything changed? Because I have a lighter option now that might fit better.", tone: 'Consultative', tactic: 'downsell' },
        { id: 'ml-fu-2', text: "I'm not going to keep chasing you — but I'd hate for you to miss this window. What would it take to make a decision either way?", tone: 'Challenger', tactic: 'takeaway' },
      ],
    },
  },
  {
    id: 'too-busy',
    label: "I'm too busy right now",
    category: 'timing-priority',
    keywords: ['busy', 'swamped', 'overwhelmed', 'no time', 'slammed', 'hectic', 'plate is full'],
    responses: {
      'cold-call': [
        { id: 'tb-cc-1', text: "Can I have 30 seconds? If it's not relevant, I'll let you go immediately.", tone: 'Consultative', tactic: 'short-time-ask', tip: '30 seconds is almost impossible to refuse. And once they\'re listening, you have your shot.' },
        { id: 'tb-cc-2', text: "That's actually why I'm calling. The people who need this most are always the busiest.", tone: 'Challenger', tactic: 'reframe' },
        { id: 'tb-cc-3', text: "Too busy...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror "too busy" and pause. They\'ll either soften ("well, not too busy, just...") or reveal the real objection.' },
      ],
      'text': [
        { id: 'tb-tx-1', text: "Being that busy is usually a sign you need this more, not less. Can I have 2 minutes?", tone: 'Challenger', tactic: 'reframe' },
        { id: 'tb-tx-2', text: "What if this saved you 10 hours next month? Would 5 minutes now be worth it?", tone: 'Consultative', tactic: 'future-pace' },
      ],
      'email': [
        { id: 'tb-em-1', text: "I know your time is valuable — that's exactly what we help with. A cleaning company we work with was spending 15 hours a week on admin before they came to us. Now they spend zero. If getting some hours back sounds appealing, I think 10 minutes would be worth it.", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'tb-em-2', text: "Would it be unreasonable to ask for 10 minutes this week? I'll show you one thing. If it's not relevant, I'll leave you alone.", tone: 'Consultative', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'tb-ip-1', text: "Is it that you're too busy to talk, or too busy to take on something new? Because what we do usually frees up time, not adds to your plate.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'tb-ip-2', text: "Imagine it's three months from now and this is handled. What would you do with those extra hours every week?", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'follow-up': [
        { id: 'tb-fu-1', text: "Still slammed? I put together something that takes 60 seconds to review. If it doesn't grab you, I'll stop reaching out.", tone: 'Consultative', tactic: 'takeaway' },
        { id: 'tb-fu-2', text: "Being busy is the best reason to talk, not the worst. What's eating your time? I might be able to help with exactly that.", tone: 'Challenger', tactic: 'reframe' },
      ],
    },
  },
  {
    id: 'not-ready',
    label: "I'm not ready to commit",
    category: 'timing-priority',
    keywords: ['commit', 'ready', 'commitment', 'contract', 'lock in', 'sign', 'decide', 'not sure'],
    responses: {
      'cold-call': [
        { id: 'nr-cc-1', text: "What would need to be true for you to feel ready?", tone: 'Consultative', tactic: 'calibrated-question', tip: '"What would need to be true" — the most powerful calibrated question. They literally tell you how to close them.' },
        { id: 'nr-cc-2', text: "There's no long-term lock-in. What if we did a 30-day trial — you see results first, then decide?", tone: 'Empathetic', tactic: 'downsell' },
        { id: 'nr-cc-3', text: "It sounds like you want to say yes but something is making you hesitate. What is it?", tone: 'Empathetic', tactic: 'labeling' },
      ],
      'text': [
        { id: 'nr-tx-1', text: "What's the one thing holding you back? I can probably solve it right now.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'nr-tx-2', text: "No contract, no lock-in. You try it, you see results, you decide. Fair?", tone: 'Empathetic', tactic: 'downsell' },
      ],
      'email': [
        { id: 'nr-em-1', text: "I get it — commitment feels risky. That's why we offer a pilot program. No contract, no long-term obligation. You try it, you see real numbers, you decide. Would it be a bad idea to at least look at what the pilot includes?", tone: 'Empathetic', tactic: 'no-oriented' },
        { id: 'nr-em-2', text: "What helped other clients get comfortable was seeing a clear, measurable plan before signing anything. I'm happy to build one for you — no obligation. That way you're deciding based on specifics, not uncertainty.", tone: 'Consultative', tactic: 'social-proof' },
      ],
      'in-person': [
        { id: 'nr-ip-1', text: "What's the hesitation? I'd rather hear it now and solve it than let it kill the deal later.", tone: 'Challenger', tactic: 'isolate' },
        { id: 'nr-ip-2', text: "Is it the commitment itself, or a specific risk? Because we can structure this to eliminate almost all the risk.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'nr-ip-3', text: "If I could remove the risk entirely — say, a trial with no contract — would you be ready to start?", tone: 'Assumptive', tactic: 'assumptive-close' },
      ],
      'follow-up': [
        { id: 'nr-fu-1', text: "Has anything shifted? Sometimes time helps — but sometimes it just delays a good decision.", tone: 'Challenger', tactic: 'reframe' },
        { id: 'nr-fu-2', text: "We just launched a no-commitment trial. Might be exactly what you were looking for — zero risk, real results.", tone: 'Empathetic', tactic: 'downsell' },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // TRUST & CREDIBILITY
  // ═══════════════════════════════════════════
  {
    id: 'bad-experience',
    label: "I've been burned before",
    category: 'trust-credibility',
    keywords: ['burned', 'bad experience', 'scam', 'ripped off', 'disappointed', 'waste', 'last guy', 'last agency'],
    responses: {
      'cold-call': [
        { id: 'be-cc-1', text: "Burned before...", tone: 'Empathetic', tactic: 'mirroring', tip: 'Mirror and wait. They need to tell the story. Once they do, you know exactly what promise to NOT make.' },
        { id: 'be-cc-2', text: "It sounds like someone made promises they couldn't keep and left you holding the bag.", tone: 'Empathetic', tactic: 'labeling', tip: 'Label the anger. Don\'t defend your industry. Don\'t say "we\'re different." Just let them feel heard.' },
        { id: 'be-cc-3', text: "You probably shouldn't trust me yet — I haven't earned that. What would I need to show you?", tone: 'Challenger', tactic: 'negative-reverse', tip: 'The negative reverse here is powerful. You\'re saying what they\'re thinking. Instant credibility.' },
      ],
      'text': [
        { id: 'be-tx-1', text: "That's frustrating. What went wrong? I want to make sure I'm not doing the same thing.", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'be-tx-2', text: "Want to see what we actually did for someone in your industry? No pitch, just receipts.", tone: 'Consultative', tactic: 'social-proof' },
      ],
      'email': [
        { id: 'be-em-1', text: "I hear that more than you'd think. What happened with the last company usually comes down to one of two things: they overpromised, or they disappeared after the sale. We do neither. Here's a case study from a client who had your exact concern — they started with a trial specifically because they didn't trust agencies anymore.", tone: 'Empathetic', tactic: 'social-proof' },
        { id: 'be-em-2', text: "Rather than asking you to trust me — which you shouldn't yet — how about I show you the work? Attached is what we built for a similar business. Judge by the results, not the pitch.", tone: 'Challenger', tactic: 'negative-reverse' },
      ],
      'in-person': [
        { id: 'be-ip-1', text: "Tell me what happened. Seriously — I want to know so I can either show you we're different or be honest and tell you we're not the right fit.", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'be-ip-2', text: "You shouldn't trust me. Not yet. But here's what I'll do — show you results from three businesses like yours. If it looks the same as what you had before, we shake hands and part ways.", tone: 'Challenger', tactic: 'takeaway' },
      ],
      'follow-up': [
        { id: 'be-fu-1', text: "I know trust takes time, especially after being burned. I'm not here to push. But I did want to share one result from someone who was in your exact shoes. Worth 60 seconds?", tone: 'Empathetic', tactic: 'short-time-ask' },
        { id: 'be-fu-2', text: "Still feeling cautious? Smart. What would I need to earn a 10-minute conversation?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
    },
  },
  {
    id: 'dont-trust-salespeople',
    label: "I don't trust salespeople",
    category: 'trust-credibility',
    keywords: ['trust', 'salesperson', 'sales', 'pushy', 'pitch', 'sell me', 'agenda'],
    responses: {
      'cold-call': [
        { id: 'dt-cc-1', text: "Good. You shouldn't trust me yet. I haven't done anything to earn it. So let me ask one question, and you decide if it's worth continuing.", tone: 'Challenger', tactic: 'negative-reverse' },
        { id: 'dt-cc-2', text: "I'm not here to sell you anything today. Honestly — if this isn't a fit, I'll tell you. Can I ask what's going on in your business?", tone: 'Empathetic', tactic: 'takeaway' },
        { id: 'dt-cc-3', text: "What would it take for this conversation to feel comfortable for you?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'text': [
        { id: 'dt-tx-1', text: "No pitch. Just a question — what's the biggest headache in your business right now?", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'dt-tx-2', text: "Honestly, I'm not trying to sell you today. If I can help, great. If not, no hard feelings.", tone: 'Empathetic', tactic: 'takeaway' },
      ],
      'email': [
        { id: 'dt-em-1', text: "I get it — nobody likes being sold to. I'm not going to pitch you in this email. Here's a real result from a client who felt the same way. If it interests you, I'm here. If not, this is my last email.", tone: 'Empathetic', tactic: 'takeaway', tip: 'The threat to stop emailing is a takeaway — people want what might go away.' },
        { id: 'dt-em-2', text: "I'll be straight with you: I do want your business. But only if it actually makes sense. If it doesn't, I'll be the first to say so. Would a 10-minute no-pressure call be a terrible idea?", tone: 'Challenger', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'dt-ip-1', text: "I respect that. Look — if this isn't a fit, I'll tell you. Deal?", tone: 'Challenger', tactic: 'takeaway' },
        { id: 'dt-ip-2', text: "What if instead of me talking, you tell me what's going on in your business and I'll tell you honestly if I can help?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'follow-up': [
        { id: 'dt-fu-1', text: "Not following up to sell you — just saw something relevant and thought of your business. No strings.", tone: 'Empathetic', tactic: 'permission-based' },
        { id: 'dt-fu-2', text: "I know I'm a salesperson. But I'd rather lose a deal than push you into something wrong. If that changes anything, I'm here.", tone: 'Challenger', tactic: 'negative-reverse' },
      ],
    },
  },
  {
    id: 'tried-didnt-work',
    label: "We tried this before and it didn't work",
    category: 'trust-credibility',
    keywords: ['tried', 'didn\'t work', 'failed', 'already tried', 'waste of time', 'no results'],
    responses: {
      'cold-call': [
        { id: 'td-cc-1', text: "Didn't work...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror "didn\'t work" and pause. They need to tell you what happened. The diagnosis matters more than the pitch.' },
        { id: 'td-cc-2', text: "It sounds like the strategy was fine but the execution let you down.", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'td-cc-3', text: "That's useful intel. What went wrong? Because there's a big difference between the approach being bad and the implementation being bad.", tone: 'Consultative', tactic: 'isolate' },
      ],
      'text': [
        { id: 'td-tx-1', text: "What did you try? Usually it's not the strategy that fails — it's how it was done.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'td-tx-2', text: "I hear that a lot. Want a second opinion on what went wrong? Might change how you see it.", tone: 'Challenger', tactic: 'reframe' },
      ],
      'email': [
        { id: 'td-em-1', text: "I appreciate you being upfront. When something 'didn't work,' it's almost always the execution, not the approach. If you're open to it, I'd love to hear what happened. I'll either show you what we'd do differently, or tell you honestly that we're not the answer either.", tone: 'Consultative', tactic: 'takeaway' },
        { id: 'td-em-2', text: "We've actually worked with several clients who came to us after a bad experience elsewhere. Here's what one of them said after six months. If that resonates, let's talk. If not, no hard feelings.", tone: 'Empathetic', tactic: 'social-proof' },
      ],
      'in-person': [
        { id: 'td-ip-1', text: "Walk me through what happened. I'd rather understand the failure than pretend it didn't happen.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'td-ip-2', text: "You know what — maybe it's not for you. But before you write it off, can I show you the difference between what you had and what we do? Three minutes.", tone: 'Challenger', tactic: 'short-time-ask' },
      ],
      'follow-up': [
        { id: 'td-fu-1', text: "I've been thinking about what you said. I put together a side-by-side showing how our approach differs from what you tried. 60 seconds of reading.", tone: 'Consultative', tactic: 'short-time-ask' },
        { id: 'td-fu-2', text: "Still skeptical from last time? I don't blame you. But if you're curious what 'done right' looks like, I have receipts.", tone: 'Challenger', tactic: 'social-proof' },
      ],
    },
  },
  {
    id: 'need-research',
    label: 'I need to do more research',
    category: 'trust-credibility',
    keywords: ['research', 'look into', 'check', 'compare', 'google', 'reviews', 'read up'],
    responses: {
      'cold-call': [
        { id: 'dr-cc-1', text: "More research...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. They\'ll tell you what specifically they want to research — that\'s the real question to answer.' },
        { id: 'dr-cc-2', text: "What specifically are you looking for? Reviews, pricing, case studies? I might have it right here.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'dr-cc-3', text: "Smart. Most people who say that are looking for one specific thing. What is it for you?", tone: 'Challenger', tactic: 'labeling' },
      ],
      'text': [
        { id: 'dr-tx-1', text: "What do you want to know? I can send you whatever you need right now.", tone: 'Empathetic', tactic: 'permission-based' },
        { id: 'dr-tx-2', text: "I've got case studies, pricing, reviews — what would actually move the needle for you?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'email': [
        { id: 'dr-em-1', text: "I respect the due diligence. To save you time, here are the three things people usually want to see: case studies, pricing, and our process. I've attached all three. What else would help you decide?", tone: 'Consultative', tactic: 'permission-based' },
        { id: 'dr-em-2', text: "Take your time. But here's what a client in your industry found when they did their comparison. Spoiler: they picked us. Not because we were cheapest — because the results spoke for themselves.", tone: 'Challenger', tactic: 'social-proof' },
      ],
      'in-person': [
        { id: 'dr-ip-1', text: "What's the number one thing you're trying to figure out? Let me help right now — before you leave and get buried in Google results.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'dr-ip-2', text: "I'd rather you make a confident decision than a fast one. What information would make this a clear yes or a clear no?", tone: 'Empathetic', tactic: 'calibrated-question' },
      ],
      'follow-up': [
        { id: 'dr-fu-1', text: "How's the research going? Anything come up that I can clear up? I'd rather answer it directly than let Google do it.", tone: 'Consultative', tactic: 'permission-based' },
        { id: 'dr-fu-2', text: "Still looking into things? Here's a comparison chart I put together — saves you about 3 hours of Googling.", tone: 'Consultative', tactic: 'short-time-ask' },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // COMPETITION & ALTERNATIVES
  // ═══════════════════════════════════════════
  {
    id: 'already-have',
    label: 'We already have something for that',
    category: 'competition-alternatives',
    keywords: ['already', 'have', 'existing', 'current', 'using', 'provider', 'agency', 'vendor'],
    responses: {
      'cold-call': [
        { id: 'ah-cc-1', text: "Already have something...", tone: 'Consultative', tactic: 'mirroring', tip: '"Already have something" — mirror it. They\'ll tell you if they love it, tolerate it, or hate it.' },
        { id: 'ah-cc-2', text: "It sounds like it's working well enough but maybe not blowing you away.", tone: 'Empathetic', tactic: 'labeling' },
        { id: 'ah-cc-3', text: "What's the one thing you wish was better about your current setup?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'text': [
        { id: 'ah-tx-1', text: "Are you thrilled with the results, or is it more of a 'good enough' thing?", tone: 'Consultative', tactic: 'isolate' },
        { id: 'ah-tx-2', text: "If you ever want a second opinion — zero pressure — I'm here.", tone: 'Empathetic', tactic: 'takeaway' },
      ],
      'email': [
        { id: 'ah-em-1', text: "Not trying to step on toes. But when was the last time you benchmarked your current solution? Markets move fast. A quick comparison might reveal money you're leaving on the table — and if not, at least you'll know you've got the best option.", tone: 'Consultative', tactic: 'reframe' },
        { id: 'ah-em-2', text: "Would it be a bad idea to do a quick side-by-side? If your current setup wins, great — you'll have the data to back it up. If not, you'll know before it costs you.", tone: 'Consultative', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'ah-ip-1', text: "How's it actually performing? If it's great, I'll shake your hand and go. Seriously.", tone: 'Challenger', tactic: 'takeaway' },
        { id: 'ah-ip-2', text: "What's the one frustration with your current setup? Even good solutions have weak spots.", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'follow-up': [
        { id: 'ah-fu-1', text: "Still happy with what you've got? No agenda — just checking in.", tone: 'Empathetic', tactic: 'permission-based' },
        { id: 'ah-fu-2', text: "A business like yours just switched from a similar setup and saw a 40% improvement in the first quarter. Thought that might interest you.", tone: 'Challenger', tactic: 'social-proof' },
      ],
    },
  },
  {
    id: 'social-media',
    label: 'We get clients from social media',
    category: 'competition-alternatives',
    keywords: ['facebook', 'social media', 'instagram', 'tiktok', 'ads', 'meta', 'social', 'reels'],
    responses: {
      'cold-call': [
        { id: 'sm-cc-1', text: "That's great for reach. But what happens after someone finds you — what's their next step?", tone: 'Consultative', tactic: 'calibrated-question', tip: 'Social gets attention. You solve what happens after the attention. Different job.' },
        { id: 'sm-cc-2', text: "Are those leads actually converting, or do some fall off before they ever book?", tone: 'Challenger', tactic: 'isolate' },
        { id: 'sm-cc-3', text: "If the algorithm changed tomorrow, what's your backup?", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'text': [
        { id: 'sm-tx-1', text: "Are you converting most of those leads, or do some drop off? We help close that gap.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'sm-tx-2', text: "Social gets the attention. We make sure those people actually pay you.", tone: 'Consultative', tactic: 'reframe' },
      ],
      'email': [
        { id: 'sm-em-1', text: "Social is great for reach — but many businesses lose money in the gap between 'someone saw my post' and 'someone actually paid me.' Businesses that pair social with a real follow-up system typically see 2-3x better conversion from the same traffic. We don't replace social — we make it pay.", tone: 'Consultative', tactic: 'social-proof' },
        { id: 'sm-em-2', text: "What's your conversion rate from social lead to paying client? If there's a gap there, that's exactly what we help close. Would it be worth a quick conversation?", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'in-person': [
        { id: 'sm-ip-1', text: "Honest question — if Instagram went down for a month, what happens to your business?", tone: 'Challenger', tactic: 'future-pace' },
        { id: 'sm-ip-2', text: "We actually work alongside social. You bring the eyeballs, we convert them. Two different jobs.", tone: 'Consultative', tactic: 'reframe' },
      ],
      'follow-up': [
        { id: 'sm-fu-1', text: "Have your social results stayed consistent? Algorithms shift constantly. Having a backup channel is worth considering.", tone: 'Consultative', tactic: 'future-pace' },
        { id: 'sm-fu-2', text: "A lot of businesses running social are pairing it with what we do — getting more revenue from the traffic they already have. Worth a chat?", tone: 'Empathetic', tactic: 'social-proof' },
      ],
    },
  },
  {
    id: 'do-manually',
    label: 'We handle it ourselves',
    category: 'competition-alternatives',
    keywords: ['manual', 'manually', 'ourselves', 'in-house', 'diy', 'do it ourselves', 'handle it', 'my team'],
    responses: {
      'cold-call': [
        { id: 'dm-cc-1', text: "How many hours a week does that take? Just ballpark.", tone: 'Consultative', tactic: 'calibrated-question', tip: 'Get them to do the math. Once they hear themselves say the number, the objection starts to crack.' },
        { id: 'dm-cc-2', text: "What's your hourly rate? Because every hour on this is an hour not on revenue.", tone: 'Challenger', tactic: 'cost-of-inaction' },
        { id: 'dm-cc-3', text: "Handle it ourselves...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. They\'ll explain who does what, how long it takes — and you\'ll hear the pain in the details.' },
      ],
      'text': [
        { id: 'dm-tx-1', text: "How many hours a week? Most people are shocked when they add it up.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'dm-tx-2', text: "If you could get those hours back, what would you spend them on?", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'email': [
        { id: 'dm-em-1', text: "A roofing company we work with was spending 15 hours a week on follow-ups — doing it all in-house. Now they spend zero, and their close rate went up 30%. Not because the strategy changed — because the execution became consistent. Would it be worth 10 minutes to see if there's a similar opportunity for you?", tone: 'Consultative', tactic: 'social-proof' },
        { id: 'dm-em-2', text: "If you could snap your fingers and get those hours back every week, what would you do with them? For most business owners, the answer is 'grow the business.' That's the trade we help you make.", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'in-person': [
        { id: 'dm-ip-1', text: "Is it sustainable, or are you starting to feel the weight? Because there's usually a breaking point — and it's better to solve it before you hit it.", tone: 'Consultative', tactic: 'future-pace' },
        { id: 'dm-ip-2', text: "What's the thing you wish you could stop doing? That's where we usually start.", tone: 'Consultative', tactic: 'calibrated-question' },
      ],
      'follow-up': [
        { id: 'dm-fu-1', text: "Still handling this in-house? Curious if it's gotten easier or harder since we talked.", tone: 'Consultative', tactic: 'permission-based' },
        { id: 'dm-fu-2', text: "I put together a time-vs-cost comparison for businesses your size. Might change how you think about the DIY approach.", tone: 'Challenger', tactic: 'cost-of-inaction' },
      ],
    },
  },
  {
    id: 'under-contract',
    label: "We're under contract with someone else",
    category: 'competition-alternatives',
    keywords: ['contract', 'locked in', 'committed', 'agreement', 'under contract', 'exclusive'],
    responses: {
      'cold-call': [
        { id: 'uc-cc-1', text: "Under contract...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. You\'ll learn if they\'re happy, counting down the days, or looking for an exit clause.' },
        { id: 'uc-cc-2', text: "Are you staying because you want to, or because you have to?", tone: 'Challenger', tactic: 'isolate' },
        { id: 'uc-cc-3', text: "When does it expire? I want to be the first call you make.", tone: 'Empathetic', tactic: 'permission-based' },
      ],
      'text': [
        { id: 'uc-tx-1', text: "When's it up? I'll check in then.", tone: 'Empathetic', tactic: 'permission-based' },
        { id: 'uc-tx-2', text: "Happy with them, or looking for the exit?", tone: 'Consultative', tactic: 'isolate' },
      ],
      'email': [
        { id: 'uc-em-1', text: "When does your agreement end? I'd like to reach out at the right time so you have options on the table before it auto-renews. No sense getting locked in again without comparing.", tone: 'Consultative', tactic: 'future-pace' },
        { id: 'uc-em-2', text: "Some of our clients were under contract too. A few found the cost of staying was actually higher than the cost of switching. Would it be worth a quick comparison?", tone: 'Challenger', tactic: 'cost-of-inaction' },
      ],
      'in-person': [
        { id: 'uc-ip-1', text: "Are you staying because you want to, or because you have to? Those are very different situations.", tone: 'Challenger', tactic: 'isolate' },
        { id: 'uc-ip-2', text: "When does it end? Let's at least talk before it auto-renews. You should know your options.", tone: 'Consultative', tactic: 'future-pace' },
      ],
      'follow-up': [
        { id: 'uc-fu-1', text: "Contract coming up for renewal? Just want to make sure you've seen what else is out there before you re-sign.", tone: 'Consultative', tactic: 'future-pace' },
        { id: 'uc-fu-2', text: "If things have changed with your current provider, I'd love to talk before you lock in again.", tone: 'Empathetic', tactic: 'permission-based' },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // AUTHORITY & DECISION
  // ═══════════════════════════════════════════
  {
    id: 'ask-partner',
    label: 'I need to talk to my partner / team',
    category: 'authority-decision',
    keywords: ['partner', 'team', 'boss', 'husband', 'wife', 'spouse', 'cofounder', 'business partner', 'consult'],
    responses: {
      'cold-call': [
        { id: 'ap-cc-1', text: "What do you think their biggest concern will be? Let me help you answer it before you even have the conversation.", tone: 'Consultative', tactic: 'calibrated-question', tip: 'Coach them to sell for you. If they walk into that conversation with answers, the deal closes.' },
        { id: 'ap-cc-2', text: "Would it help if I jumped on a quick call with both of you? That way nobody's playing telephone.", tone: 'Assumptive', tactic: 'assumptive-close' },
        { id: 'ap-cc-3', text: "Setting your partner aside for a second — if it was just your call, what would you do?", tone: 'Challenger', tactic: 'isolate', tip: 'Isolate whether the partner is a real decision-maker or an escape hatch.' },
      ],
      'text': [
        { id: 'ap-tx-1', text: "What's their biggest concern likely to be? I can help you address it.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'ap-tx-2', text: "Want me to put together a one-pager you can forward? Easier than explaining it.", tone: 'Empathetic', tactic: 'permission-based' },
      ],
      'email': [
        { id: 'ap-em-1', text: "Happy to set up a brief call with both of you — easier when everyone hears it at the same time. When would work?", tone: 'Assumptive', tactic: 'assumptive-close', tip: 'Notice the assumptive: "when would work" not "would you want to." The meeting is a given.' },
        { id: 'ap-em-2', text: "I've attached a one-page summary designed for decision-makers — covers ROI, risk, and timeline. Should answer most of their questions upfront.", tone: 'Consultative', tactic: 'permission-based' },
      ],
      'in-person': [
        { id: 'ap-ip-1', text: "What do you think they'll push back on? Let's work through it now so you're ready.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'ap-ip-2', text: "Is your partner involved in the day-to-day, or is this a money decision? That changes what I'd send.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'ap-ip-3', text: "If it was your call alone, would you move forward?", tone: 'Challenger', tactic: 'isolate' },
      ],
      'follow-up': [
        { id: 'ap-fu-1', text: "Did you run it by your partner? What came up? I can address anything that didn't land.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'ap-fu-2', text: "Would a quick group call make this easier? I'm free this week — 15 minutes max.", tone: 'Assumptive', tactic: 'assumptive-close' },
      ],
    },
  },
  {
    id: 'send-info',
    label: 'Just send me some info',
    category: 'authority-decision',
    keywords: ['send', 'info', 'information', 'brochure', 'details', 'email me', 'materials'],
    responses: {
      'cold-call': [
        { id: 'si-cc-1', text: "Sure — so I send the right stuff, what specifically are you interested in?", tone: 'Consultative', tactic: 'isolate', tip: 'Never send generic info. Make them tell you what they care about — that\'s your opening.' },
        { id: 'si-cc-2', text: "I can, but honestly — the info is pretty general. A 5-minute call would tell you more than any PDF. Can I have those 5 minutes right now?", tone: 'Challenger', tactic: 'short-time-ask' },
        { id: 'si-cc-3', text: "Send info...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror "send info." They\'ll clarify what they actually want — or admit they\'re just trying to get off the phone.' },
      ],
      'text': [
        { id: 'si-tx-1', text: "On it. What email? Anything specific you want highlighted?", tone: 'Empathetic', tactic: 'permission-based' },
        { id: 'si-tx-2', text: "Real talk — a 5-min call will tell you more than any doc. Open to that instead?", tone: 'Challenger', tactic: 'reframe' },
      ],
      'email': [
        { id: 'si-em-1', text: "Before I send anything generic, tell me about your situation so I can tailor it. What's the main problem you're trying to solve? I'd rather send you something useful than a brochure that sits in your inbox.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'si-em-2', text: "I've attached a brief overview. But most people find a quick 10-minute call more useful than reading docs. Would that be a waste of your time?", tone: 'Challenger', tactic: 'no-oriented' },
      ],
      'in-person': [
        { id: 'si-ip-1', text: "Before you go — what's the one thing you'd need to see in that info to say yes? Because I might be able to answer it right now.", tone: 'Challenger', tactic: 'isolate' },
        { id: 'si-ip-2', text: "Is there something specific holding you back, or do you genuinely want more details?", tone: 'Consultative', tactic: 'labeling' },
      ],
      'follow-up': [
        { id: 'si-fu-1', text: "Did you get a chance to look at what I sent? I can do the 3-minute version on a call if reading docs isn't your thing.", tone: 'Consultative', tactic: 'short-time-ask' },
        { id: 'si-fu-2', text: "The PDF can be a lot. Want the short version? 5 minutes, I'll hit the highlights, you decide.", tone: 'Challenger', tactic: 'short-time-ask' },
      ],
    },
  },
  {
    id: 'dont-need',
    label: "We don't need that",
    category: 'authority-decision',
    keywords: ['need', 'necessary', 'dont need', 'not needed', 'unnecessary', 'not interested'],
    responses: {
      'cold-call': [
        { id: 'dn-cc-1', text: "Don't need that...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. "Don\'t need that" could mean "not a priority," "don\'t understand it," or "I\'m fine." The mirror will reveal which.' },
        { id: 'dn-cc-2', text: "You might be right. Would it be a terrible idea to ask one question to make sure?", tone: 'Challenger', tactic: 'no-oriented' },
        { id: 'dn-cc-3', text: "Is it that you don't need it, or that it's not a priority? Those are different things.", tone: 'Consultative', tactic: 'reframe' },
      ],
      'text': [
        { id: 'dn-tx-1', text: "How are you handling it now? Curious if there's a gap you might not see.", tone: 'Consultative', tactic: 'calibrated-question' },
        { id: 'dn-tx-2', text: "Fair enough. Can I show you one thing? If it doesn't click, I'll leave you alone.", tone: 'Challenger', tactic: 'takeaway' },
      ],
      'email': [
        { id: 'dn-em-1', text: "A cleaning company we work with said the exact same thing — until they realized they were leaving $4,000/month in unreturned leads on the table. Not saying that's you. But would it be worth 10 minutes to find out?", tone: 'Challenger', tactic: 'social-proof' },
        { id: 'dn-em-2', text: "I'd love to understand how you're currently handling this. Sometimes there are gaps that aren't obvious until someone from outside points them out. No agenda — just curiosity.", tone: 'Consultative', tactic: 'permission-based' },
      ],
      'in-person': [
        { id: 'dn-ip-1', text: "Walk me through how you're doing it now. I'll tell you honestly if I see something — and if I don't, I'll leave you alone.", tone: 'Challenger', tactic: 'takeaway' },
        { id: 'dn-ip-2', text: "Is it that you don't need it, or that you don't need it right now? Because I hear both and they're very different conversations.", tone: 'Consultative', tactic: 'reframe' },
      ],
      'follow-up': [
        { id: 'dn-fu-1', text: "I saw something that made me think of your business. 60 seconds — if it doesn't click, this is my last message.", tone: 'Challenger', tactic: 'takeaway' },
        { id: 'dn-fu-2', text: "A business in your space just started with us and saw results in the first week. Thought you'd want to know before your competitors get too far ahead.", tone: 'Urgency', tactic: 'social-proof' },
      ],
    },
  },
  {
    id: 'enough-clients',
    label: 'We have enough clients already',
    category: 'authority-decision',
    keywords: ['enough', 'full', 'capacity', 'clients', 'booked', 'plenty', 'maxed out'],
    responses: {
      'cold-call': [
        { id: 'ec-cc-1', text: "Enough clients...", tone: 'Consultative', tactic: 'mirroring', tip: 'Mirror it. "Enough clients" might mean "full" or it might mean "barely keeping the lights on." Let them clarify.' },
        { id: 'ec-cc-2', text: "That's a great position. Are they all the kind of clients you actually want, though?", tone: 'Consultative', tactic: 'reframe' },
        { id: 'ec-cc-3', text: "What happens if two of your biggest clients leave next month? What's your backup?", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'text': [
        { id: 'ec-tx-1', text: "All good ones? Or are some more headache than they're worth?", tone: 'Consultative', tactic: 'isolate' },
        { id: 'ec-tx-2', text: "At your stage it's usually not about more clients — it's about better ones. Higher ticket, less hassle.", tone: 'Challenger', tactic: 'reframe' },
      ],
      'email': [
        { id: 'ec-em-1', text: "Being full is a great problem. But it raises a question: what happens if two or three of those clients leave? Having a pipeline means you're never scrambling. I'm not suggesting more — I'm suggesting a safety net.", tone: 'Challenger', tactic: 'future-pace' },
        { id: 'ec-em-2', text: "At your stage, the play isn't more clients — it's better clients. Higher value, longer retention, less friction. If that sounds worth exploring, I have ideas.", tone: 'Consultative', tactic: 'reframe' },
      ],
      'in-person': [
        { id: 'ec-ip-1', text: "Are you turning people away because you're thriving, or because you're stretched too thin? Those need very different solutions.", tone: 'Consultative', tactic: 'isolate' },
        { id: 'ec-ip-2', text: "What does your pipeline look like if two big clients walk tomorrow? Because that happens fast.", tone: 'Challenger', tactic: 'future-pace' },
      ],
      'follow-up': [
        { id: 'ec-fu-1', text: "Still fully booked? Things shift fast. Even when things are good, a pipeline keeps you from ever being desperate.", tone: 'Consultative', tactic: 'future-pace' },
        { id: 'ec-fu-2', text: "What if instead of more clients, you had better clients? That's a different conversation — and one worth having.", tone: 'Challenger', tactic: 'reframe' },
      ],
    },
  },
];
