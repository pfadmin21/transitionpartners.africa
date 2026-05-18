/* ── TAP I · GEO DATA & MAP LOGIC ───────────────────────────── */

const GEO_DATA = {
  kenya:{name:'Kenya',region:'East Africa · Primary Market',headline:"East Africa's largest economy and a frontier for private climate investment, with 100% clean energy by 2030 as a sovereign commitment.",
    opp:{s1v:'$12B',s1l:'Annual Climate Finance Gap',s2v:'$4.2B',s2l:'Private Sector Climate Investment (2023)',text:"Kenya's green economy transition is among the continent's most advanced. The Least Cost Power Development Plan identifies 5.3 GW of new renewable capacity needed by 2030. C&I solar is the fastest-growing segment, with strong corporate off-takers including Safaricom and multinationals in Nairobi. The water sector faces a $2.1B annual investment gap to meet SDG 6 targets."},
    derisking:[
      {icon:'🏦',title:'IFC & AfDB Senior Debt',body:'IFC and AfDB both have active Kenya portfolios. DFI debt available at 12–15 year tenors for renewable energy and water projects.',badge:'Active DFI Presence',badgeClass:''},
      {icon:'📄',title:'Kenya REFIT / FiT Contracts',body:'Feed-in Tariff contracts from KETRACO and Kenya Power provide sovereign-backed offtake at USD-denominated rates for IPP developers.',badge:'Contracted Revenue',badgeClass:'gold'},
      {icon:'🛡️',title:'MIGA Political Risk Cover',body:'MIGA has approved coverage for multiple Kenyan energy projects. Expropriation, transfer restriction, and war risk available.',badge:'MIGA Active',badgeClass:''},
      {icon:'🌱',title:'GCF Readiness & SEFA TA',body:'Green Climate Fund readiness support and SEFA technical assistance grants fund feasibility and ESIA studies for pipeline projects.',badge:'TA Available',badgeClass:'gold'},
    ],
    pop:{num:'55M',note:"Kenya's urban population is growing at 4.3% annually. Mobile financial inclusion (M-Pesa) reaches 80%+ of adults. Electrification has risen from 23% (2013) to 75% (2023), but the rural gap persists — creating a structural demand base for distributed solar and clean water infrastructure.",
      bars:[{label:'Electrification',val:75,max:100,cls:'good',disp:'75%'},{label:'GDP Growth',val:5.6,max:10,cls:'good',disp:'5.6%'},{label:'HDI Trend',val:68,max:100,cls:'warn',disp:'↑ Improving'},{label:'Climate Risk',val:72,max:100,cls:'bad',disp:'High'}]},
    energy:{cards:[{icon:'☀️',val:'2,100',lbl:'kWh/m²/yr Solar'},{icon:'💨',val:'8.5m/s',lbl:'Mean Wind Speed (Coast)'},{icon:'🌋',val:'900MW',lbl:'Geothermal Potential'}],ndcPct:92,ndcText:"Kenya already derives 92% of electricity from renewables — geothermal, hydro, wind and solar. The NDC targets net-zero by 2050, with near-term focus on distributed solar and storage to close the rural access gap."}},
  rwanda:{name:'Rwanda',region:'East Africa · Primary Market',headline:"Africa's most governance-credible small market — a compact, rapidly urbanising economy with ambitious climate and water targets and deep DFI relationships.",
    opp:{s1v:'$2.4B',s1l:'Annual Climate Finance Gap',s2v:'$0.8B',s2l:'Private Climate Investment (2023)',text:"Rwanda's NDC commits to 38% emissions reduction by 2030 and 100% clean water access. Energy access has risen from 6% (2009) to 72% (2023) — with off-grid solar and mini-grids driving the final miles. The water sector offers significant project-finance opportunities under public-private partnership frameworks."},
    derisking:[
      {icon:'🏛️',title:'Rwanda Development Board',body:'RDB provides a single-window investment facilitation service with 3-day company registration, tax incentives, and dispute resolution guarantees.',badge:'Top Governance',badgeClass:'gold'},
      {icon:'🏦',title:'Proparco & FMO Active',body:'Both Proparco (French DFI) and FMO (Dutch) have active Rwanda programmes. Proparco has committed over €200M to Rwandan projects.',badge:'DFI Co-Investment',badgeClass:''},
      {icon:'📄',title:'EDPRS Grid Offtake',body:'Energy Development & Power Reform Strategy provides 20-year power purchase agreements with Rwanda Energy Group as sovereign off-taker.',badge:'Sovereign PPA',badgeClass:'gold'},
      {icon:'🛡️',title:'ATI Political Risk',body:'African Trade & Investment Insurance (ATI) provides political risk and credit insurance for investments routed through Mauritius SPVs.',badge:'ATI Coverage',badgeClass:''},
    ],
    pop:{num:'14M',note:"Rwanda has the highest population density in mainland Africa at 525 people/km². Rapid urbanisation and a young median age (20 years) create structural demand for energy and water services.",
      bars:[{label:'Electrification',val:72,max:100,cls:'good',disp:'72%'},{label:'GDP Growth',val:8.2,max:10,cls:'good',disp:'8.2%'},{label:'HDI Trend',val:74,max:100,cls:'good',disp:'↑ Strong'},{label:'Climate Risk',val:58,max:100,cls:'warn',disp:'Medium'}]},
    energy:{cards:[{icon:'☀️',val:'1,800',lbl:'kWh/m²/yr Solar'},{icon:'💧',val:'340MW',lbl:'Hydro Capacity'},{icon:'⚡',val:'72%',lbl:'Energy Access (2023)'}],ndcPct:52,ndcText:"Rwanda targets 52% renewable energy in total energy mix by 2030 and net-zero by 2050. Off-grid solar, mini-hydro, and clean cooking solutions are prioritised."}},
  namibia:{name:'Namibia',region:'Southern Africa · Primary Market',headline:"Namibia offers the most compelling renewable energy export opportunity on the continent — abundant solar, wind, and hydrogen potential with one of Africa's most stable regulatory environments.",
    opp:{s1v:'$8.5B',s1l:'Annual Climate Finance Gap',s2v:'$1.6B',s2l:'Private Climate Investment (2023)',text:"Namibia has committed to becoming a major renewable energy exporter to the Southern African Power Pool (SAPP) and to Europe via green hydrogen. C&I solar is growing rapidly as Namibia's mining sector decarbonises. The regulatory framework for private power generation is among the most developed in Africa."},
    derisking:[
      {icon:'⚡',title:'REFIT / ERA Licensing',body:'Electricity Control Board (ECB) and ERA provide clear licensing pathways for IPPs. Independent Power Producers can sign 25-year PPAs with NamPower.',badge:'Clear IPP Framework',badgeClass:'gold'},
      {icon:'🏦',title:'DEG & AIIB Co-Investment',body:'German DFI DEG and Asian Infrastructure Investment Bank both have active Namibia mandates.',badge:'DFI Active',badgeClass:''},
      {icon:'🇩🇪',title:'EU Green Hydrogen Partnership',body:'Namibia signed a Green Hydrogen Partnership with Germany and the EU in 2022, providing diplomatic and financial backing for hydrogen infrastructure development.',badge:'Bilateral Support',badgeClass:'gold'},
      {icon:'🛡️',title:'MIGA & ATI Coverage',body:'Both MIGA and ATI provide political risk insurance. Namibia has ICSID arbitration ratification, providing additional investor protection.',badge:'Treaty Protection',badgeClass:''},
    ],
    pop:{num:'3.1M',note:"Namibia is one of Africa's least densely populated countries but also one of its most urbanised (52% urban). GDP per capita ($5,800) is among Africa's highest.",
      bars:[{label:'Electrification',val:54,max:100,cls:'warn',disp:'54%'},{label:'GDP per Capita',val:78,max:100,cls:'good',disp:'$5,800'},{label:'HDI Trend',val:65,max:100,cls:'warn',disp:'→ Stable'},{label:'Climate Risk',val:65,max:100,cls:'warn',disp:'Medium-High'}]},
    energy:{cards:[{icon:'☀️',val:'2,800',lbl:'kWh/m²/yr Solar'},{icon:'💨',val:'9.2m/s',lbl:'Mean Wind Speed (Coast)'},{icon:'🔬',val:'3GW',lbl:'Green H₂ Pipeline'}],ndcPct:70,ndcText:"Namibia targets 70% renewables in electricity generation by 2030 and net-zero by 2050. World-class solar irradiance (Namib Desert) makes Namibia one of the best renewable energy sites globally."}},
  egypt:{name:'Egypt',region:'North Africa · Primary Market',headline:"Africa's largest economy by population and a sophisticated C&I energy market, with the continent's most ambitious renewable energy targets.",
    opp:{s1v:'$32B',s1l:'Annual Climate Finance Gap',s2v:'$6.8B',s2l:'Private Climate Investment (2023)',text:"Egypt's Integrated Sustainable Energy Strategy targets 42% renewables in electricity generation by 2035. The country has the largest C&I solar pipeline in Africa, driven by multinational manufacturers, cement, and steel sectors. EBRD, IFC, and AfDB all have established Egypt investment programmes."},
    derisking:[
      {icon:'📄',title:'FiT & BOOT Frameworks',body:"Feed-in Tariff (FiT) and Build-Own-Operate-Transfer (BOOT) frameworks provide bankable long-term contracts. Electricity produced under FiT is denominated in USD.",badge:'USD-Linked Revenue',badgeClass:'gold'},
      {icon:'🏦',title:'IFC, EBRD & AfDB Presence',body:"All three multilaterals are actively co-investing in Egyptian renewables. The EBRD alone has committed over $1.5B to Egyptian energy transition projects since 2015.",badge:'Deep DFI Coverage',badgeClass:''},
      {icon:'⚖️',title:'ICSID & BIT Network',body:"Egypt has ratified ICSID arbitration and signed 100+ bilateral investment treaties, providing strong foreign investor protection.",badge:'100+ BITs',badgeClass:'gold'},
      {icon:'💱',title:'FX Partial Mitigation',body:"Central Bank of Egypt USD repatriation facilities and MIGA convertibility cover partially mitigate EGP/USD currency risk.",badge:'FX Tooling',badgeClass:''},
    ],
    pop:{num:'106M',note:"Egypt is Africa's most populous Arab country, with a median age of 24. The population is expected to reach 130M by 2030, driving sustained energy and water demand growth.",
      bars:[{label:'Electrification',val:99,max:100,cls:'good',disp:'99.7%'},{label:'GDP Growth',val:4.2,max:10,cls:'good',disp:'4.2%'},{label:'HDI Trend',val:61,max:100,cls:'warn',disp:'→ Moderate'},{label:'Climate Risk',val:75,max:100,cls:'bad',disp:'High (Water)'}]},
    energy:{cards:[{icon:'☀️',val:'2,600',lbl:'kWh/m²/yr Solar'},{icon:'💨',val:'10m/s',lbl:'Wind Speed (Suez Gulf)'},{icon:'🏭',val:'42%',lbl:'Renewables Target 2035'}],ndcPct:42,ndcText:"Egypt targets 42% renewable electricity by 2035. The Benban Solar Complex (1.8 GW) is operational and the Gabal El-Zeit wind farm (580 MW) is the continent's largest wind facility."}},
  madagascar:{name:'Madagascar',region:'Indian Ocean · Secondary Market',headline:"One of the world's most biodiverse countries, Madagascar combines a significant electrification gap with high nature-based carbon asset potential.",
    opp:{s1v:'$4.1B',s1l:'Annual Climate Finance Gap',s2v:'$0.3B',s2l:'Private Climate Investment (2023)',text:"Only 28% of Malagasy households have electricity access. The country's vast tropical forests (6.5M hectares) represent significant verified carbon credit potential under VCS and REDD+ frameworks. TAP I is in preliminary assessment phase, evaluating decentralised solar and nature-based solutions opportunities."},
    derisking:[
      {icon:'🌿',title:'REDD+ & VCS Carbon Credits',body:'Madagascar has registered REDD+ programmes generating verified carbon credits. Blended finance structures can combine carbon revenue with energy offtake to improve project economics.',badge:'Nature Finance',badgeClass:'gold'},
      {icon:'🏦',title:'GCF & UNDP Grant Layer',body:'Green Climate Fund readiness grants and UNDP project preparation facilities are available to fund early-stage development.',badge:'Grant Available',badgeClass:''},
      {icon:'🇫🇷',title:'AFD / Proparco Presence',body:'French Development Agency (AFD) and Proparco have established Madagascar programmes. AFD has committed €300M to Malagasy development since 2010.',badge:'DFI Engaged',badgeClass:''},
      {icon:'📄',title:'DTAA Treaty Active',body:'Active Double Taxation Avoidance Agreement with Mauritius reduces withholding on investment returns routed through the Mauritius GBC structure.',badge:'DTAA Active',badgeClass:'gold'},
    ],
    pop:{num:'28M',note:"Madagascar's population is among the world's youngest (median age 19) and is growing at 2.8% per year. Climate vulnerability is extreme — cyclones, droughts, and deforestation are accelerating.",
      bars:[{label:'Electrification',val:28,max:100,cls:'bad',disp:'28%'},{label:'GDP per Capita',val:12,max:100,cls:'bad',disp:'$528'},{label:'HDI Trend',val:30,max:100,cls:'bad',disp:'↓ Declining'},{label:'Climate Risk',val:88,max:100,cls:'bad',disp:'Very High'}]},
    energy:{cards:[{icon:'☀️',val:'2,100',lbl:'kWh/m²/yr Solar'},{icon:'🌿',val:'6.5M',lbl:'Ha Forest Carbon Assets'},{icon:'💧',val:'~20GW',lbl:'Hydro Potential (Untapped)'}],ndcPct:79,ndcText:"Madagascar targets 79% renewable electricity by 2030, primarily through hydro expansion. Off-grid solar and mini-grids are critical to closing the electrification gap."}},
  seychelles:{name:'Seychelles',region:'Indian Ocean · Secondary Market',headline:"A Small Island Developing State at the frontier of blue economy and nature finance, with the world's first sovereign blue bond and a net-zero electricity commitment by 2030.",
    opp:{s1v:'$0.4B',s1l:'Annual Climate Finance Gap',s2v:'$0.1B',s2l:'Private Climate Investment (2023)',text:"The Seychelles punches above its size in climate finance innovation. The world's first sovereign blue bond ($15M, 2018) demonstrated the country's ability to structure novel instruments. High fossil fuel import costs (diesel-dependent electricity) create strong economics for renewables."},
    derisking:[
      {icon:'🌊',title:'Blue Carbon / VCS Framework',body:'Seychelles has registered blue carbon projects under the Verra VCS standard. Carbon credit revenue can be layered with energy offtake to create blended project economics.',badge:'Blue Finance Pioneer',badgeClass:'gold'},
      {icon:'🌱',title:'GCF & UNDP Active',body:'Green Climate Fund has approved Seychelles-specific financing. UNDP Blue Economy programme provides both technical assistance and co-financing for eligible projects.',badge:'GCF Active',badgeClass:''},
      {icon:'📄',title:'DTAA & Stable Governance',body:"Active DTAA with Mauritius. Seychelles has stable multi-party democracy and World Bank Doing Business rankings among Africa's highest.",badge:'AAA Governance',badgeClass:'gold'},
      {icon:'💱',title:'USD-Pegged Revenue',body:"Seychelles Rupee is managed against USD. Electricity tariffs are partially dollarised for C&I customers, reducing currency risk on project revenues.",badge:'FX Stable',badgeClass:''},
    ],
    pop:{num:'98K',note:"Seychelles is Africa's smallest sovereign state by population but its highest income per capita (~$17,000 PPP). Climate vulnerability is existential — rising sea levels and ocean acidification threaten the archipelago's physical and economic foundations.",
      bars:[{label:'Electrification',val:97,max:100,cls:'good',disp:'97%'},{label:'GDP per Capita',val:92,max:100,cls:'good',disp:'$17K PPP'},{label:'HDI Trend',val:80,max:100,cls:'good',disp:'↑ High'},{label:'Climate Risk',val:90,max:100,cls:'bad',disp:'Existential'}]},
    energy:{cards:[{icon:'☀️',val:'2,000',lbl:'kWh/m²/yr Solar'},{icon:'🌊',val:'850km²',lbl:'Blue Carbon Habitats'},{icon:'⚡',val:'100%',lbl:'Renewables Target 2030'}],ndcPct:100,ndcText:"Seychelles has committed to 100% renewable electricity by 2030, currently at ~30% solar + wind. The government's Blue Economy Roadmap identifies blue carbon, sustainable aquaculture, and ocean-linked renewable energy as priority investment areas."}},
  mauritius:{name:'Mauritius',region:'Indian Ocean · Platform Domicile',headline:"Not a deployment target — Mauritius is the structural foundation of the entire platform. Its treaty network, regulatory environment, and institutional infrastructure are why the Fund is domiciled here.",
    opp:{s1v:'45',s1l:'DTAA Treaties (All Target Markets)',s2v:'FSC',s2l:'Regulated Fund Vehicle (CIS)',text:"Mauritius has built one of the world's most sophisticated cross-border investment platforms over 30 years. The Global Business Company (GBC) structure enables treaty-protected capital flows to all TAP I target markets. FSC regulation meets the governance standards required by European institutional investors."},
    derisking:[
      {icon:'🏛️',title:'45-DTAA Treaty Network',body:'Mauritius has signed DTAAs with all TAP I target markets, eliminating or reducing 10–30% withholding on cross-border returns.',badge:'Treaty Gateway',badgeClass:'gold'},
      {icon:'📋',title:'FSC Regulated CIS',body:'The Fund is structured as a Closed-End Collective Investment Scheme under FSC Mauritius. This regulatory status gives European pension funds the governance comfort to deploy into emerging markets.',badge:'Institutional Grade',badgeClass:'gold'},
      {icon:'📊',title:'IFRS 10 B11 Compliant',body:'The GBC SPV structure is designed to pass the IFRS 10 B11 control test, enabling European institutional investors to consolidate investments off-balance sheet.',badge:'Off Balance Sheet',badgeClass:''},
      {icon:'🌍',title:'IFC PS & EU Green Taxonomy',body:'Every deployment must meet IFC Performance Standards and EU Green Taxonomy criteria as conditions of Investment Committee approval.',badge:'ESG Alignment',badgeClass:'gold'},
    ],
    pop:{num:'1.3M',note:"Mauritius is a stable, upper-middle-income democracy with strong rule of law. The financial services sector contributes 12% of GDP. Its neutral geopolitical position between Africa and Asia, combined with its treaty network and English/French bilingualism, makes it the natural gateway for cross-continental investment.",
      bars:[{label:'Electrification',val:100,max:100,cls:'good',disp:'100%'},{label:'GDP per Capita',val:88,max:100,cls:'good',disp:'$13K'},{label:'Doing Business',val:85,max:100,cls:'good',disp:'Top 15 Africa'},{label:'Political Stability',val:90,max:100,cls:'good',disp:'Very High'}]},
    energy:{cards:[{icon:'☀️',val:'2,200',lbl:'kWh/m²/yr Solar'},{icon:'🌊',val:'Blue Econ',lbl:'Ocean Economy Strategy'},{icon:'⚡',val:'60%',lbl:'Renewables Target 2030'}],ndcPct:60,ndcText:"Mauritius targets 60% renewable electricity by 2030 (currently ~23%). As a Small Island Developing State, Mauritius faces acute climate vulnerability, reinforcing its commitment to a green transition — and creating alignment of interest with the Fund's mandate."}},
};

let activeTab = 'opportunity';

function switchTab(tab, el) {
  activeTab = tab;
  document.querySelectorAll('.gp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.gp-panel').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  const panel = document.getElementById('panel-' + tab);
  if (panel) panel.classList.add('active');
}

function selectCountry(id) {
  const d = GEO_DATA[id];
  if (!d) return;

  document.getElementById('gpName').textContent    = d.name;
  document.getElementById('gpRegion').textContent  = d.region;
  document.getElementById('gpHeadline').textContent = d.headline;

  const profile = document.getElementById('geoProfile');
  if (profile) profile.style.borderColor = id === 'mauritius' ? 'rgba(192,154,60,0.3)' : 'rgba(10,112,112,0.3)';

  document.getElementById('gpStat1Val').textContent = d.opp.s1v;
  document.getElementById('gpStat1Lbl').textContent = d.opp.s1l;
  document.getElementById('gpStat2Val').textContent = d.opp.s2v;
  document.getElementById('gpStat2Lbl').textContent = d.opp.s2l;
  document.getElementById('gpOppText').textContent  = d.opp.text;

  const driskEl = document.getElementById('gpDeriskList');
  if (driskEl) driskEl.innerHTML = d.derisking.map(r => `
    <div class="gpp-drisk-item">
      <div style="font-size:18px;">${r.icon}</div>
      <div>
        <div class="gpp-drisk-title">${r.title}</div>
        <div class="gpp-drisk-body">${r.body}</div>
        <span class="gpp-drisk-badge ${r.badgeClass}">${r.badge}</span>
      </div>
    </div>`).join('');

  document.getElementById('gpPop').textContent = d.pop.num;
  document.getElementById('gpTrendNote').textContent = d.pop.note;
  const tbEl = document.getElementById('gpTrendBars');
  if (tbEl) tbEl.innerHTML = d.pop.bars.map(b => `
    <div class="gpp-tbar">
      <div class="gpp-tbar-label">${b.label}</div>
      <div class="gpp-tbar-track"><div class="gpp-tbar-fill ${b.cls}" style="width:${(b.val/b.max*100).toFixed(0)}%"></div></div>
      <div class="gpp-tbar-val">${b.disp}</div>
    </div>`).join('');

  const ecEl = document.getElementById('gpEnergyCards');
  if (ecEl) ecEl.innerHTML = d.energy.cards.map(c => `
    <div class="gppe-card">
      <span class="gppe-icon">${c.icon}</span>
      <div class="gppe-val">${c.val}</div>
      <div class="gppe-lbl">${c.lbl}</div>
    </div>`).join('');
  document.getElementById('gpNdcPct').textContent = d.energy.ndcPct + '%';
  const ndcBar = document.getElementById('gpNdcBar');
  if (ndcBar) ndcBar.style.width = d.energy.ndcPct + '%';
  document.getElementById('gpNdcText').textContent = d.energy.ndcText;

  document.querySelectorAll('.geo-item').forEach(el => el.classList.remove('active'));
  const li = document.querySelector(`[data-country="${id}"]`);
  if (li) li.classList.add('active');

  document.querySelectorAll('.map-country.target-primary,.map-country.target-secondary,.map-country.target-domicile')
    .forEach(el => el.classList.remove('active'));
  const mapEl = document.getElementById('map-' + id);
  if (mapEl) mapEl.classList.add('active');
}
