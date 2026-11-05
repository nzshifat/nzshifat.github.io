/**
 * Articles & Op-Eds Data Store and Reader
 * Supports on-site reading with verified outlet link and markdown rendering
 */

const articlesDatabase = {
  "ai-future-labor-economics": {
    title: "Artificial Intelligence and the Reconfiguration of White-Collar Labor Markets",
    subtitle: "Why the current wave of generative technologies challenges traditional human capital theories.",
    outlet: "The Financial Times / Project Syndicate",
    outletUrl: "https://example.com/op-eds/ai-labor-markets",
    date: "October 14, 2026",
    readingTime: "6 min read",
    category: "technology",
    author: "Nazmuzzaman Shifat",
    content: `
For decades, economists understood the relationship between technological change and employment through the lens of Skill-Biased Technological Change (SBTC). Under this framework, automation substituted routine physical and cognitive tasks while complementing high-skill, abstract reasoning. 

However, the rapid diffusion of large-scale cognitive models and autonomous agent workflows is inverting this paradigm. Rather than merely automating data entry or physical logistics, modern generative architectures operate directly within domains previously considered the exclusive province of advanced degree holders: legal analysis, institutional reporting, econometric synthesis, and software engineering.

## The Disruption of Cognitive Comparative Advantage

Traditional human capital models assume that investment in formal schooling insulates workers against displacement by increasing their capacity for abstract problem-solving. Yet, empirical evidence from recent market adjustments suggests that tasks with well-defined textual syntax and precedent-based heuristics are precisely those where synthetic models achieve rapid efficiency gains.

> "The central challenge of this decade is not the total displacement of labor, but the structural polarization of cognitive rents."

As synthetic models assume routine drafting and data aggregation, the premium on human workers shifts toward three non-fungible capabilities:
1. **Contextual Evaluation**: The capacity to verify facts, discern institutional nuance, and audit automated outputs.
2. **Normative Judgment**: Ethical deliberation, stakeholder mediation, and accountability for consequences.
3. **Cross-Disciplinary Synthesis**: Connecting domain expertise across institutional boundaries where models lack real-world grounded feedback.

## Policy Implications and The Road Ahead

If public policy focuses solely on retraining displaced workers in basic computational literacy, it will fight the last war. What is required instead is institutional renewal: updated collective bargaining mechanisms for algorithmic governance, transparent disclosure standards for AI-assisted publications, and fiscal architectures that distribute productivity gains broadly across civil society.
    `
  },
  "climate-resilience-macro-policy": {
    title: "Integrating Climate Risk into Macro-Financial Stability Frameworks",
    subtitle: "Central banks and fiscal authorities can no longer treat environmental shocks as exogenous outliers.",
    outlet: "The Daily Star (Op-Ed)",
    outletUrl: "https://example.com/op-eds/climate-macro-stability",
    date: "August 28, 2026",
    readingTime: "5 min read",
    category: "policy",
    author: "Nazmuzzaman Shifat",
    content: `
Physical climate events—prolonged droughts, catastrophic floods, and sea-level rise—are shifting from rare tail-risk events to recurrent structural shocks. In emerging economies particularly, these shocks propagate directly through sovereign debt channels, agricultural yields, and banking sector balance sheets.

## Beyond Conventional Stress Testing

Standard macroeconomic forecasting has long treated environmental degradation as an externality outside monetary policy mandates. Yet, when severe typhoons or seasonal anomalies depress domestic agricultural output, the resulting food price volatility translates immediately into core inflation. Central banks attempting to anchor inflation expectations through blunt interest rate hikes risk suppressing domestic investment without alleviating the supply-side bottleneck.

## Designing Resilient Policy Tools

A modern resilience framework requires three pillars:
* **Sovereign Green Bond Issuance with Disaster Clauses**: Debt instruments that automatically defer principal repayment following certified climate disasters.
* **Granular Geo-Spatial Risk Audits**: Requiring commercial banks to map corporate loan collateral against high-resolution climate hazard models.
* **Targeted Capital Buffers**: Establishing countercyclical contingency reserves tailored to regional climate vulnerability rather than generic risk weights.
    `
  },
  "data-sovereignty-global-south": {
    title: "Data Sovereignty and Industrial Strategy in the Global South",
    subtitle: "How developing economies can protect digital assets while participating in global knowledge networks.",
    outlet: "Dhaka Tribune / Global Policy Review",
    outletUrl: "https://example.com/op-eds/data-sovereignty-global-south",
    date: "May 12, 2026",
    readingTime: "7 min read",
    category: "governance",
    author: "Nazmuzzaman Shifat",
    content: `
As national economies become increasingly digitized, data infrastructure is supplanting traditional physical infrastructure as the foundation of sovereign industrial policy. The question facing policymakers across the Global South is whether they will remain mere consumers and data exporters for multinational technology firms, or whether they can cultivate sovereign compute and local analytical ecosystems.

The path forward requires proactive digital public infrastructure (DPI), open-access scientific datasets, and regional knowledge consortiums that treat local administrative and linguistic data as a sovereign strategic resource.
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
  document.title = `${article.title} | Nazmuzzaman Shifat`;

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

// Lightweight, safe markdown converter for articles
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

