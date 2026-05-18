/* ── TAP I · BLENDED FINANCE CALCULATOR ─────────────────────── */

const BFC_MARKETS = {
  kenya:{name:'Kenya',sectors:['Solar PV','C&I Solar','Clean Water','Wind','Blue Carbon'],dfiMult:{conservative:2.2,base:2.5,upside:2.8},taPct:{conservative:.14,base:.17,upside:.20},irr:{conservative:[3.2,5.8,7.4,8.9],base:[4.8,7.5,10.2,12.4],upside:[6.5,10.2,13.8,16.5]},stack:{equity:17,concess:14,dfi:65,grant:4},carbonBoost:{conservative:.6,base:.9,upside:1.2},carbonMarkets:true,fxAdj:{hedged:[0,0,0,0],partial:[-.4,-.7,-1.0,-1.2],unhedged:[-1.1,-2.0,-2.8,-3.5]},fxNote:'KES has depreciated ~8% p.a. vs USD (5-yr avg). Forward contracts available via local banks at ~2–3% annual cost. Partial hedge recommended for 7yr+ tenors. USD-denominated offtake from Safaricom and multinationals provides partial natural hedge.',risk:[{name:'Currency',val:52,cls:'med'},{name:'Offtake',val:22,cls:'low'},{name:'Political',val:35,cls:'low'},{name:'Construction',val:42,cls:'med'},{name:'Regulatory',val:28,cls:'low'}],impact:{mw:[6,8,11],hh:[18000,24000,31000],co2:[13800,18400,24200],jobs:[260,340,430],water:0,carbon:0},sdgs:['SDG 7 Energy','SDG 13 Climate','SDG 8 Jobs','SDG 9 Infrastructure'],strip:{gap:'$12B',priv:'$4.2B',renew:'92%',lev:'~2.4×',treaty:'45 DTAAs'}},
  rwanda:{name:'Rwanda',sectors:['Off-Grid Solar','Mini-Hydro','Clean Water','Mini-Grids','Clean Cooking'],dfiMult:{conservative:2.0,base:2.3,upside:2.6},taPct:{conservative:.18,base:.21,upside:.24},irr:{conservative:[2.8,5.2,6.8,8.2],base:[4.2,7.0,9.5,11.5],upside:[5.8,9.5,12.8,15.5]},stack:{equity:21,concess:16,dfi:58,grant:5},carbonBoost:{conservative:.5,base:.7,upside:1.0},carbonMarkets:false,fxAdj:{hedged:[0,0,0,0],partial:[-.3,-.5,-.8,-1.0],unhedged:[-.9,-1.6,-2.3,-2.9]},fxNote:'RWF is a managed float — relatively stable vs USD. Forward contracts available via Bank of Kigali and KCB Rwanda at ~2% p.a. Low FX volatility is a key Rwanda investment advantage vs regional peers.',risk:[{name:'Currency',val:48,cls:'med'},{name:'Offtake',val:18,cls:'low'},{name:'Political',val:15,cls:'low'},{name:'Construction',val:38,cls:'low'},{name:'Regulatory',val:20,cls:'low'}],impact:{mw:[3,5,7],hh:[12000,18000,25000],co2:[8200,12200,16800],jobs:[150,210,290],water:[60000,85000,115000],carbon:0},sdgs:['SDG 6 Water','SDG 7 Energy','SDG 13 Climate','SDG 3 Health'],strip:{gap:'$2.4B',priv:'$0.8B',renew:'52%',lev:'~2.3×',treaty:'45 DTAAs'}},
  namibia:{name:'Namibia',sectors:['Solar PV','Wind','Green H₂','C&I Mining','Coastal Resilience'],dfiMult:{conservative:2.4,base:2.8,upside:3.2},taPct:{conservative:.12,base:.15,upside:.18},irr:{conservative:[3.8,6.5,8.8,10.5],base:[5.5,8.8,11.8,14.2],upside:[7.2,11.5,15.2,18.5]},stack:{equity:15,concess:12,dfi:68,grant:5},carbonBoost:{conservative:.3,base:.5,upside:.8},carbonMarkets:true,fxAdj:{hedged:[0,0,0,0],partial:[-.5,-.8,-1.1,-1.4],unhedged:[-1.4,-2.4,-3.3,-4.2]},fxNote:'NAD is pegged 1:1 to ZAR. Rand hedging via JSE derivatives. ZAR/USD volatility ~12% p.a. Green H₂ and mining C&I offtake typically EUR or USD-denominated.',risk:[{name:'Currency',val:45,cls:'med'},{name:'Offtake',val:20,cls:'low'},{name:'Political',val:12,cls:'low'},{name:'Construction',val:40,cls:'med'},{name:'Regulatory',val:18,cls:'low'}],impact:{mw:[10,14,19],hh:[0,0,0],co2:[20400,28600,38500],jobs:[380,520,690],water:0,carbon:[28000,42000,58000]},sdgs:['SDG 7 Energy','SDG 13 Climate','SDG 8 Jobs','SDG 17 Partnerships'],strip:{gap:'$8.5B',priv:'$1.6B',renew:'80%',lev:'~2.8×',treaty:'45 DTAAs'}},
  egypt:{name:'Egypt',sectors:['Solar PV','Wind','Desalination','Green H₂','Industrial'],dfiMult:{conservative:2.3,base:2.6,upside:3.0},taPct:{conservative:.15,base:.18,upside:.22},irr:{conservative:[3.5,6.2,8.4,10.2],base:[5.2,8.5,11.5,13.8],upside:[7.0,11.2,14.8,17.8]},stack:{equity:16,concess:13,dfi:65,grant:6},carbonBoost:{conservative:.4,base:.6,upside:.9},carbonMarkets:false,fxAdj:{hedged:[0,0,0,0],partial:[-.8,-1.3,-1.8,-2.2],unhedged:[-2.2,-3.8,-5.2,-6.5]},fxNote:'EGP has experienced major devaluations (2016, 2022–23). Forward market is liquid but costly at 4–6% p.a. USD-denominated offtake is strongly preferred.',risk:[{name:'Currency',val:68,cls:'hi'},{name:'Offtake',val:25,cls:'low'},{name:'Political',val:55,cls:'med'},{name:'Construction',val:35,cls:'low'},{name:'Regulatory',val:42,cls:'med'}],impact:{mw:[13,18,24],hh:[36000,52000,70000],co2:[26000,38000,51000],jobs:[490,680,900],water:0,carbon:0},sdgs:['SDG 7 Energy','SDG 13 Climate','SDG 8 Jobs','SDG 11 Cities'],strip:{gap:'$22B',priv:'$3.8B',renew:'42%',lev:'~2.6×',treaty:'45 DTAAs'}},
  madagascar:{name:'Madagascar',sectors:['Off-Grid Solar','Blue Carbon','Clean Water','Mini-Hydro','Mangrove'],dfiMult:{conservative:1.8,base:2.1,upside:2.4},taPct:{conservative:.22,base:.26,upside:.30},irr:{conservative:[2.2,4.5,6.0,7.5],base:[3.8,6.5,8.8,11.0],upside:[5.2,9.0,12.2,15.0]},stack:{equity:24,concess:20,dfi:48,grant:8},carbonBoost:{conservative:1.2,base:1.8,upside:2.5},carbonMarkets:true,fxAdj:{hedged:[0,0,0,0],partial:[-.5,-.9,-1.2,-1.6],unhedged:[-1.5,-2.7,-3.7,-4.8]},fxNote:'MGA is thinly traded with very limited hedging instruments. USD/EUR-denominated carbon credit revenue (VCS/REDD+) provides meaningful natural protection for nature-based projects.',risk:[{name:'Currency',val:72,cls:'hi'},{name:'Offtake',val:48,cls:'med'},{name:'Political',val:65,cls:'hi'},{name:'Construction',val:58,cls:'med'},{name:'Regulatory',val:55,cls:'med'}],impact:{mw:[2,3,4],hh:[8000,12000,17000],co2:[5600,8200,11500],jobs:[130,180,240],water:[30000,45000,62000],carbon:[60000,95000,135000]},sdgs:['SDG 15 Ecosystems','SDG 13 Climate','SDG 6 Water','SDG 1 Poverty'],strip:{gap:'$3.2B',priv:'$0.3B',renew:'38%',lev:'~2.1×',treaty:'45 DTAAs'}},
  seychelles:{name:'Seychelles',sectors:['Solar PV','Ocean Energy','Desalination','Blue Carbon','Resilience'],dfiMult:{conservative:2.0,base:2.3,upside:2.6},taPct:{conservative:.16,base:.20,upside:.24},irr:{conservative:[3.0,5.5,7.2,8.8],base:[4.5,7.2,9.8,12.0],upside:[6.0,9.8,13.2,16.2]},stack:{equity:19,concess:15,dfi:58,grant:8},carbonBoost:{conservative:.9,base:1.4,upside:2.0},carbonMarkets:true,fxAdj:{hedged:[0,0,0,0],partial:[-.2,-.4,-.6,-.8],unhedged:[-.7,-1.3,-1.9,-2.5]},fxNote:'SCR is effectively USD-pegged in practice. Lowest FX risk across all TAP I markets. Blue bond and VCS carbon structures are USD-denominated. Most favourable currency environment for return preservation.',risk:[{name:'Currency',val:30,cls:'low'},{name:'Offtake',val:28,cls:'low'},{name:'Political',val:18,cls:'low'},{name:'Construction',val:45,cls:'med'},{name:'Regulatory',val:22,cls:'low'}],impact:{mw:[3,4,5],hh:[5000,8000,12000],co2:[6800,9800,13500],jobs:[85,120,165],water:0,carbon:[24000,38000,55000]},sdgs:['SDG 14 Ocean','SDG 7 Energy','SDG 13 Climate','SDG 17 Partnerships'],strip:{gap:'$0.4B',priv:'$0.12B',renew:'25%',lev:'~2.3×',treaty:'45 DTAAs'}}
};

let bfcMarket='kenya',bfcScenario='conservative',bfcSector=0,bfc2CarbonOn=false,bfc2FxMode='hedged';
let bfc2JObj=null,bfc2FxObj=null;
const BFC_SCEN_IDX={conservative:0,base:1,upside:2};

function bfcFmt(n){return n>=1000?'USD '+(n/1000).toFixed(1)+'B':'USD '+Math.round(n)+'M';}

function bfcSelectMarket(key,el){
  bfcMarket=key;
  document.querySelectorAll('.bfc-pill:not(.domicile)').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');bfcSector=0;bfcRenderSectors();bfcUpdate();
}
function bfcSetScen(s,el){
  bfcScenario=s;
  document.querySelectorAll('.bfc-scen').forEach(e=>e.classList.remove('active'));
  el.classList.add('active');bfcUpdate();
}
function bfcRenderSectors(){
  const m=BFC_MARKETS[bfcMarket];
  const el=document.getElementById('bfcSectors');
  if(!el)return;
  el.innerHTML=m.sectors.map((s,i)=>
    `<div class="bfc-sec${i===bfcSector?' active':''}" onclick="bfcPickSector(${i},this)">${s}</div>`
  ).join('');
}
function bfcPickSector(i,el){
  bfcSector=i;document.querySelectorAll('.bfc-sec').forEach(e=>e.classList.remove('active'));el.classList.add('active');bfcUpdate();
}
function bfc2Tab(id,el){
  document.querySelectorAll('.bfc2-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.bfc2-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('bfc2-'+id).classList.add('active');
  el.classList.add('active');
  if(id==='jcurve')bfc2DrawJ();
  if(id==='fx')bfc2DrawFx();
}
function bfc2SetFx(m,el){
  bfc2FxMode=m;
  document.querySelectorAll('.bfc2-fx-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');bfc2DrawFx();
}
function bfcGetIrr(scIdx){
  const m=BFC_MARKETS[bfcMarket];const sc=['conservative','base','upside'][scIdx];
  return m.irr[sc].map((v,i)=>{
    const carbon=bfc2CarbonOn&&m.carbonMarkets?(m.carbonBoost[sc]*(i+1)/4):0;
    return +(v+carbon).toFixed(2);
  });
}
function bfcUpdate(){
  const m=BFC_MARKETS[bfcMarket];const sc=bfcScenario;const si=BFC_SCEN_IDX[sc];
  const amt=parseInt(document.getElementById('bfcSlider').value);
  document.getElementById('bfcAmtDisplay').textContent='USD '+amt+'M';
  const dfi=amt*m.dfiMult[sc];const ta=amt*m.taPct[sc];const total=amt+dfi+ta;
  const irrs=bfcGetIrr(si);const irr10=irrs[3];
  const boostVal=bfc2CarbonOn&&m.carbonMarkets?m.carbonBoost[sc]:0;
  const carbonBoostEl=document.getElementById('bfc2CarbonBoost');
  if(carbonBoostEl)carbonBoostEl.textContent=m.carbonMarkets?(bfc2CarbonOn?'+'+boostVal.toFixed(1)+'% IRR':'+'+m.carbonBoost[sc].toFixed(1)+'% if enabled'):'Not applicable';
  document.getElementById('bfcKpi1').textContent=bfcFmt(amt);
  document.getElementById('bfcKpi2').textContent=bfcFmt(Math.round(dfi));
  document.getElementById('bfcKpi2sub').textContent='~'+m.dfiMult[sc].toFixed(1)+'× leverage';
  document.getElementById('bfcKpi3').textContent=bfcFmt(Math.round(total));
  document.getElementById('bfcKpi4').textContent=irr10.toFixed(1)+'%';
  document.getElementById('bfcKpi4sub').textContent=sc.charAt(0).toUpperCase()+sc.slice(1)+' scenario';
  const s=m.stack;const hasCO2=bfc2CarbonOn&&m.carbonMarkets;
  const carbonSeg=hasCO2?4:0;
  const segs=[
    {pct:s.equity-(hasCO2?2:0),lbl:'Fund Equity · First Loss',note:'First-loss tranche · absorbed before any senior impairment',col:'var(--gold)'},
    {pct:s.concess,lbl:'Concessional Co-Finance',note:'Subordinated co-finance · DFI or development agency source',col:'#0A7070'},
    {pct:s.dfi-(hasCO2?2:0),lbl:'DFI Senior Debt',note:'Long-tenor senior debt · IFC / AfDB / Proparco / DEG',col:'#4a9cc8'},
    ...(hasCO2?[{pct:carbonSeg,lbl:'Carbon Credit Revenue (VCS)',note:'VCS / REDD+ carbon credit revenue · USD-denominated offtake',col:'#1e7a42'}]:[]),
    {pct:s.grant,lbl:'Grant / TA Facility',note:'Technical assistance & project preparation facility',col:'#7a4a9a'},
  ];
  const totalPrj=Math.round(total);
  document.getElementById('bfc2TermSheet').innerHTML=segs.map(sg=>{
    const amt=bfcFmt(Math.round(totalPrj*sg.pct/100));
    return `<div class="bfc2-ts-row"><div class="bfc2-ts-accent" style="background:${sg.col}"></div><div class="bfc2-ts-body"><div class="bfc2-ts-name">${sg.lbl}</div><div class="bfc2-ts-note">${sg.note}</div></div><div class="bfc2-ts-bar-wrap"><div class="bfc2-ts-bar"><div class="bfc2-ts-bar-fill" style="width:${sg.pct}%;background:${sg.col}"></div></div><div class="bfc2-ts-pct">${sg.pct}% of stack</div></div><div class="bfc2-ts-amt">${amt}</div></div>`;
  }).join('');
  const eqPct=segs[0].pct;
  document.getElementById('bfc2LossFill').style.width=Math.min(eqPct*4,100)+'%';
  document.getElementById('bfc2LossNote').textContent='Fund equity of '+eqPct+'% absorbs the first '+eqPct+'% of project-level losses before concessional and DFI tranches are impaired.';
  const riskMarket2=document.getElementById('bfcRiskMarket2');
  if(riskMarket2)riskMarket2.textContent=m.name;
  document.getElementById('bfc2RiskItems').innerHTML=m.risk.map(r=>`<div class="bfc-risk-item"><div class="bfc-risk-name">${r.name}</div><div class="bfc-risk-track"><div class="bfc-risk-fill ${r.cls}" style="width:${r.val}%"></div></div><div class="bfc-risk-score">${r.val<30?'Low':r.val<60?'Med':'High'}</div></div>`).join('');
  const imp=m.impact;const items=[];
  if(imp.mw&&imp.mw[si])items.push({num:imp.mw[si],unit:'MW',desc:'Installed renewable capacity'});
  if(imp.hh&&imp.hh[si])items.push({num:imp.hh[si].toLocaleString(),unit:'HH',desc:'Households with clean energy'});
  if(imp.co2&&imp.co2[si])items.push({num:imp.co2[si].toLocaleString(),unit:'tCO₂/yr',desc:'Annual emissions avoided'});
  if(imp.jobs&&imp.jobs[si])items.push({num:imp.jobs[si].toLocaleString(),unit:'Jobs',desc:'Direct & indirect employment'});
  if(imp.water&&imp.water[si])items.push({num:imp.water[si].toLocaleString(),unit:'People',desc:'Improved water access'});
  if(imp.carbon&&imp.carbon[si])items.push({num:imp.carbon[si].toLocaleString(),unit:'tCO₂e',desc:'Nature-based carbon credits (VCS)'});
  document.getElementById('bfc2ImpactGrid').innerHTML=items.slice(0,6).map(i=>`<div class="bfc2-impact-card"><div class="bfc2-impact-num">${i.num}<span class="bfc2-impact-unit">${i.unit}</span></div><div class="bfc2-impact-desc">${i.desc}</div></div>`).join('');
  document.getElementById('bfc2SdgRow').innerHTML=m.sdgs.map(s=>`<div class="bfc2-sdg">${s}</div>`).join('');
  const st=m.strip;
  document.getElementById('bfcMs1Val').textContent=st.gap;
  document.getElementById('bfcMs2Val').textContent=st.priv;
  document.getElementById('bfcMs3Val').textContent=st.renew;
  document.getElementById('bfcMs4Val').textContent=st.lev;
  document.getElementById('bfcMs5Val').textContent=st.treaty;
  const activePanel=document.querySelector('.bfc2-panel.active');
  if(activePanel){
    const pid=activePanel.id;
    if(pid==='bfc2-jcurve')bfc2DrawJ();
    if(pid==='bfc2-fx')bfc2DrawFx();
  }
}
function bfc2DrawJ(){
  if(typeof Chart==='undefined')return;
  const m=BFC_MARKETS[bfcMarket];const sc=bfcScenario;const si=BFC_SCEN_IDX[sc];
  const ticket=parseInt(document.getElementById('bfcSlider').value);
  const irr10=bfcGetIrr(si)[3];
  const yrs=[0,1,2,3,4,5,6,7,8,9,10];
  const data=yrs.map(y=>{
    if(y===0)return +(-ticket).toFixed(1);
    if(y===1)return +(-ticket*0.7).toFixed(1);
    if(y===2)return +(-ticket*0.22).toFixed(1);
    const rv=(irr10/100);const gain=ticket*Math.pow(1+rv,y-2)-ticket;
    return +(gain*0.82).toFixed(1);
  });
  if(bfc2JObj){bfc2JObj.destroy();}
  const ctx=document.getElementById('bfc2JChart').getContext('2d');
  bfc2JObj=new Chart(ctx,{type:'line',data:{labels:yrs.map(y=>'Yr '+y),datasets:[{label:'Cumulative cash flow',data,borderColor:'#C09A3C',backgroundColor:'rgba(192,154,60,.07)',pointBackgroundColor:data.map(v=>v>=0?'#0A7070':'#C0392B'),pointRadius:4,tension:.4,fill:true,borderWidth:2},{label:'Break-even',data:yrs.map(()=>0),borderColor:'rgba(255,255,255,.12)',borderDash:[4,4],pointRadius:0,borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>'USD '+c.parsed.y.toFixed(1)+'M'}}},scales:{x:{ticks:{color:'rgba(255,255,255,.28)',font:{size:9}},grid:{color:'rgba(255,255,255,.05)'}},y:{ticks:{color:'rgba(255,255,255,.28)',font:{size:9},callback:v=>'$'+v.toFixed(0)+'M'},grid:{color:'rgba(255,255,255,.05)'},border:{dash:[4,4]}}}}});
}
function bfc2DrawFx(){
  if(typeof Chart==='undefined')return;
  const m=BFC_MARKETS[bfcMarket];const sc=bfcScenario;const si=BFC_SCEN_IDX[sc];
  const base=bfcGetIrr(si);const adj=m.fxAdj[bfc2FxMode];
  const vals=base.map((v,i)=>+Math.max(0,v+adj[i]).toFixed(1));
  const barColors=vals.map(v=>v<4?'rgba(192,58,43,.75)':v<8?'rgba(192,154,60,.8)':'rgba(10,112,112,.8)');
  const fxNoteEl=document.getElementById('bfc2FxNote');
  if(fxNoteEl)fxNoteEl.textContent=m.fxNote;
  if(bfc2FxObj){bfc2FxObj.destroy();}
  const ctx=document.getElementById('bfc2FxChart').getContext('2d');
  bfc2FxObj=new Chart(ctx,{type:'bar',data:{labels:['Yr 3','Yr 5','Yr 7','Yr 10'],datasets:[{label:'Net IRR %',data:vals,backgroundColor:barColors,borderRadius:2,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.parsed.y.toFixed(1)+'% net IRR'}}},scales:{x:{ticks:{color:'rgba(255,255,255,.32)',font:{size:10}},grid:{display:false}},y:{ticks:{color:'rgba(255,255,255,.32)',font:{size:9},callback:v=>v+'%'},grid:{color:'rgba(255,255,255,.05)'},min:0}}}});
}
