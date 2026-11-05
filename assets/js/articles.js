/**
 * Articles & Op-Eds Data Store and Reader
 * Supports on-site reading with verified outlet link and markdown rendering
 */

const articlesDatabase = {
  "higher-ed-admission-bangladesh": {
    title: "Higher Education Admission Policies in Bangladesh: Upward Mobility or Reinforcing Inequality?",
    subtitle: "An examination of standardized testing bottlenecks and quota reform in public universities.",
    outlet: "The Daily Star (Op-Ed) / WES-CIHE Boston College",
    outletUrl: "https://drive.google.com/file/d/14CwXwx7ZIT7GylhkSu-ixVyta-AOPGjR/view",
    date: "September 18, 2024",
    readingTime: "6 min read",
    category: "equity",
    author: "Md Nazmuzzaman Shifat",
    content: `
Higher education in Bangladesh has long been viewed as the preeminent engine of social mobility. For first-generation college students from rural agrarian households, securing admission to a flagship public university represents a life-altering inflection point.

Yet, an empirical examination of admissions data reveals a more troubling structural reality: the very mechanisms designed to ensure meritocracy frequently amplify regional and socioeconomic stratification.

## The Bottleneck of Standardized Testing

Every year, over a million students sit for the Higher Secondary Certificate (HSC) examinations, competing for a fraction of available seats in top public universities. The intense reliance on high-stakes competitive entrance examinations creates a thriving multi-million dollar coaching industry concentrated overwhelmingly in metropolitan Dhaka.

> "When standardized testing rewards expensive coaching centers rather than fundamental conceptual understanding, meritocracy becomes a proxy for parental wealth."

Rural students, educated in under-resourced secondary schools without access to specialized test preparation, enter these examinations at an acute disadvantage. This systemic divergence is not a reflection of cognitive aptitude, but of disparate capital allocation in early and secondary schooling.

## Policy Recommendations for Reform

A truly equitable admission framework must move beyond raw aggregate scores to embrace context-aware evaluation:

1. **Socio-Economic Index Weighting**: Factoring school district infrastructure and parental education levels into admission scoring formulas.
2. **Cluster Examination Transparency**: Expanding the centralized cluster admission system while publishing comprehensive anonymized admissions telemetry.
3. **Bridge Programs and Remedial Support**: Providing university-sponsored summer academic transition bootcamps for admitted students from marginalized backgrounds.

Without bold policy intervention, our premier institutions risk entrenching existing privilege rather than cultivating the nation's broad intellectual potential.
    `
  },
  "beyond-sdg4-educational-equity": {
    title: "Beyond SDG4: Reimagining Global Education Goals for a Post-Pandemic World",
    subtitle: "Why enrollment metrics alone fail to capture foundational literacy and cognitive resilience.",
    outlet: "Dhaka Tribune / Global Policy",
    outletUrl: "https://example.com/op-eds/beyond-sdg4",
    date: "May 15, 2024",
    readingTime: "5 min read",
    category: "policy",
    author: "Md Nazmuzzaman Shifat",
    content: `
Sustainable Development Goal 4 (SDG4) established an ambitious commitment to ensure inclusive and equitable quality education for all by 2030. In the early years of the millennium, international development metrics celebrated rapid gains in gross primary enrollment ratios across South Asia and Sub-Saharan Africa.

However, enrollment without learning is an empty promise. 

## The Quality Paradox

Field research in low-resource communities reveals alarming rates of "learning poverty." Children who have completed three or four years of primary schooling frequently struggle to read a simple paragraph or perform single-digit subtraction. 

The disruption of the COVID-19 pandemic severely compounded these inequities. In hard-to-reach geographic regions—such as the riverine char islands of northern Bangladesh—extended school closures eroded nearly two years of foundational skills, with adolescent girls experiencing disproportionately severe learning losses and dropout rates.

## Toward Meaningful Metrics

To reimagine global education targets beyond 2030, the international community must transition from counting bodies in classrooms to measuring substantive learning outcomes and institutional capacity:
* **Real-time Diagnostic Assessments**: Moving away from punitive summative exams toward continuous formative diagnostic tools.
* **Targeted Foundational Instruction**: Adopting evidence-based pedagogical models like Teaching at the Right Level (TaRL).
* **Decentralized Resource Allocation**: Directing fiscal grants directly to school management committees in climate-vulnerable communities.
    `
  },
  "edtech-rural-communities": {
    title: "EdTech in the Margins: What Works for Teachers in Riverine Communities?",
    subtitle: "Field lessons on digital pedagogy from northern Bangladesh char islands.",
    outlet: "The Financial Express",
    outletUrl: "https://example.com/op-eds/edtech-char-islands",
    date: "December 12, 2023",
    readingTime: "5 min read",
    category: "edtech",
    author: "Md Nazmuzzaman Shifat",
    content: `
While metropolitan policy discussions often imagine educational technology through the lens of high-bandwidth streaming and tablet labs, the daily reality in remote river-island schools requires fundamentally different pedagogical assumptions.

## Infrastructure Friction

In rural char communities, intermittent solar electricity, device sharing, and cellular dead zones are structural constants. When EdTech interventions assume continuous connectivity or complex software updates, they predictably fail.

In our field investigations with rural mathematics educators, the most resilient interventions were those that treated technology not as a substitute for human instruction, but as an asynchronous cognitive scaffold for the teacher:
1. **Low-Bandwidth Micro-Modules**: Audio-visual prompts and short demonstration clips cached on offline memory cards.
2. **Peer Learning Circles**: Structured WhatsApp / SMS communities where isolated teachers share localized lesson adaptations.
3. **Formative Assessment Cards**: Physical rubrics paired with periodic SMS response logging.

Closing the educational divide requires designing for the hardest edge cases first.
    `
  }
};

// Render article when on article.html
document.addEventListener('DOMContentLoaded', () => {
  const articleContainer = document.getElementById('article-render-container');
  if (!articleContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  const article = articlesDatabase[articleId] || Object.values(articlesDatabase)[0];

  if (!article) {
    articleContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem;">
        <h2>Article Not Found</h2>
        <p style="color: var(--text-muted); margin: 1rem 0 2rem;">The requested op-ed or essay could not be located.</p>
        <a href="opeds.html" class="btn btn-primary">Back to Op-Eds</a>
      </div>
    `;
    return;
  }

  // Update document title
  document.title = `${article.title} | Md Nazmuzzaman Shifat`;

  // Render Header & Meta
  const titleEl = document.getElementById('article-title');
  const subtitleEl = document.getElementById('article-subtitle');
  const dateEl = document.getElementById('article-date');
  const timeEl = document.getElementById('article-reading-time');
  const outletEl = document.getElementById('article-outlet');
  const outletLinkEl = document.getElementById('article-outlet-link');
  const bodyEl = document.getElementById('article-body');

  if (titleEl) titleEl.textContent = article.title;
  if (subtitleEl) subtitleEl.textContent = article.subtitle;
  if (dateEl) dateEl.textContent = article.date;
  if (timeEl) timeEl.textContent = article.readingTime;
  if (outletEl) outletEl.textContent = article.outlet;
  if (outletLinkEl) {
    outletLinkEl.href = article.outletUrl;
    outletLinkEl.setAttribute('target', '_blank');
    outletLinkEl.setAttribute('rel', 'noopener noreferrer');
  }

  if (bodyEl) {
    bodyEl.innerHTML = parseMarkdown(article.content);
  }
});

// Lightweight markdown converter for on-site article view
function parseMarkdown(md) {
  let html = md.trim();

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Unordered list items
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^[0-9]\. (.*$)/gim, '<li>$1</li>');

  // Wrap list items
  html = html.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');

  // Paragraphs
  const paragraphs = html.split(/\n\s*\n/);
  return paragraphs.map(p => {
    p = p.trim();
    if (p.startsWith('<h1>') || p.startsWith('<h2>') || p.startsWith('<h3>') || 
        p.startsWith('<blockquote>') || p.startsWith('<ul>') || p.startsWith('<ol>')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');
}
