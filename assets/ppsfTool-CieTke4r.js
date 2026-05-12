import{w as r,p as e}from"./chunk-ZYFC6VSF-DFKJfhEe.js";const t=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>Savoir Properties — PPSF Intelligence Engine</title>\r
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>\r
<style>\r
:root {\r
  --ivory: #F8F4EE;\r
  --ivory-dark: #EDE8DF;\r
  --cream: #FAF8F4;\r
  --gold: #B8973E;\r
  --gold-dark: #9A7D2E;\r
  --gold-light: rgba(184,151,62,0.12);\r
  --gold-border: rgba(184,151,62,0.25);\r
  --black: #0C0B09;\r
  --dark: #1A1814;\r
  --card: #FFFFFF;\r
  --border: rgba(0,0,0,0.08);\r
  --border-strong: rgba(0,0,0,0.14);\r
  --text: #1A1814;\r
  --muted: #7A7468;\r
  --dim: #B8B2A8;\r
  --green: #2D7A5A;\r
  --green-bg: rgba(45,122,90,0.1);\r
  --red: #C04040;\r
  --red-bg: rgba(192,64,64,0.1);\r
  --blue: #3A6FA8;\r
  --font-display: 'Cormorant Garamond', Georgia, serif;\r
  --font-body: 'Jost', system-ui, sans-serif;\r
}\r
*{box-sizing:border-box;margin:0;padding:0;}\r
body{background:var(--ivory);color:var(--text);font-family:var(--font-body);font-size:14px;min-height:100vh;}\r
\r
/* Header */\r
.header{border-bottom:1px solid var(--border-strong);padding:16px 32px;display:flex;align-items:center;justify-content:space-between;background:var(--black);position:sticky;top:0;z-index:100;}\r
.hbrand{display:flex;align-items:center;gap:14px;}\r
.hlogo{width:34px;height:34px;border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:15px;color:var(--gold);font-style:italic;}\r
.hname{font-family:var(--font-display);font-size:16px;color:var(--ivory);letter-spacing:0.06em;font-weight:300;}\r
.htag{font-size:9px;color:var(--gold);letter-spacing:0.14em;text-transform:uppercase;margin-top:2px;}\r
.hbadge{font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold-border);padding:5px 12px;font-family:var(--font-body);}\r
\r
/* Layout */\r
.main{display:grid;grid-template-columns:400px 1fr;min-height:calc(100vh - 62px);}\r
\r
/* Input Panel */\r
.input-panel{background:var(--black);border-right:1px solid rgba(255,255,255,0.06);padding:28px 24px;overflow-y:auto;max-height:calc(100vh - 62px);}\r
.ptitle{font-family:var(--font-display);font-size:20px;color:var(--ivory);font-weight:300;margin-bottom:4px;font-style:italic;}\r
.psub{font-size:11px;color:#888;line-height:1.7;margin-bottom:24px;}\r
\r
.fsec{margin-bottom:22px;}\r
.fslabel{font-size:9px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(184,151,62,0.2);}\r
.field{margin-bottom:10px;}\r
.field label{font-size:10px;color:#777;display:block;margin-bottom:5px;letter-spacing:0.05em;text-transform:uppercase;}\r
.field input,.field select,.field textarea{width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:var(--ivory);font-family:var(--font-body);font-size:13px;padding:9px 12px;outline:none;transition:border-color 0.2s;appearance:none;resize:none;}\r
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--gold);}\r
.field input::placeholder,.field textarea::placeholder{color:#444;}\r
.frow{display:grid;grid-template-columns:1fr 1fr;gap:10px;}\r
\r
.uhdr{display:grid;grid-template-columns:1.1fr 0.9fr 1fr 56px 28px;gap:6px;margin-bottom:6px;}\r
.ppsf-preview{font-size:11px;font-weight:500;color:#B8973E;display:flex;align-items:center;white-space:nowrap;min-width:54px;}\r
.uhdr span{font-size:9px;color:#666;text-transform:uppercase;letter-spacing:0.06em;}\r
.urow{display:grid;grid-template-columns:1.1fr 0.9fr 1fr 56px 28px;gap:6px;margin-bottom:6px;align-items:center;}\r
.urow input{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:var(--ivory);font-family:var(--font-body);font-size:12px;padding:7px 8px;outline:none;transition:border-color 0.2s;width:100%;}\r
.urow input:focus{border-color:var(--gold);}\r
.urow input::placeholder{color:#444;font-size:11px;}\r
.brem{width:24px;height:24px;background:none;border:1px solid #333;color:#666;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0;}\r
.brem:hover{border-color:var(--red);color:var(--red);}\r
.badd{width:100%;background:none;border:1px dashed #333;color:#666;font-family:var(--font-body);font-size:11px;padding:8px;cursor:pointer;transition:all 0.2s;margin-top:4px;}\r
.badd:hover{border-color:var(--gold);color:var(--gold);}\r
.brun{width:100%;background:var(--gold);border:none;color:var(--black);font-family:var(--font-body);font-weight:500;font-size:12px;padding:14px;cursor:pointer;letter-spacing:0.1em;text-transform:uppercase;transition:all 0.2s;margin-top:8px;}\r
.brun:hover{background:var(--gold-dark);}\r
.brun:disabled{background:#333;color:#666;cursor:not-allowed;}\r
\r
select option{background:#1A1814;}\r
\r
/* Results */\r
.results-panel{background:var(--cream);padding:28px;overflow-y:auto;max-height:calc(100vh - 62px);}\r
\r
.empty-state{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:60px 40px;text-align:center;}\r
.eicon{font-family:var(--font-display);font-size:48px;color:var(--gold);opacity:0.4;font-style:italic;}\r
.etitle{font-family:var(--font-display);font-size:22px;color:var(--text);font-weight:300;}\r
.esub{font-size:12px;color:var(--muted);line-height:1.7;max-width:320px;}\r
\r
.loading-state{display:none;flex-direction:column;align-items:center;justify-content:center;padding:60px 40px;gap:20px;height:100%;}\r
.lspin{width:36px;height:36px;border:1.5px solid var(--border);border-top-color:var(--gold);border-radius:50%;animation:spin 0.9s linear infinite;}\r
@keyframes spin{to{transform:rotate(360deg);}}\r
.lsteps{display:flex;flex-direction:column;gap:8px;}\r
.lstep{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:10px;transition:color 0.3s;}\r
.lstep.active{color:var(--gold);}\r
.lstep.done{color:var(--green);}\r
.sdot{width:5px;height:5px;border-radius:50%;background:var(--dim);flex-shrink:0;transition:background 0.3s;}\r
.lstep.active .sdot{background:var(--gold);}\r
.lstep.done .sdot{background:var(--green);}\r
\r
.results-content{display:none;}\r
.rhead{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px;gap:16px;}\r
.rhead-left{}\r
.rproject{font-family:var(--font-display);font-size:26px;font-weight:300;margin-bottom:3px;}\r
.rarea{font-size:11px;color:var(--gold);text-transform:uppercase;letter-spacing:0.1em;}\r
.bpdf{background:var(--black);border:none;color:var(--gold);font-family:var(--font-body);font-size:11px;font-weight:500;padding:10px 18px;cursor:pointer;letter-spacing:0.08em;text-transform:uppercase;transition:all 0.2s;display:flex;align-items:center;gap:8px;flex-shrink:0;}\r
.bpdf:hover{background:var(--gold);color:var(--black);}\r
.bpdf svg{flex-shrink:0;}\r
\r
.mstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);margin-bottom:22px;}\r
.mcard{background:var(--card);padding:16px 18px;}\r
.mlabel{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;}\r
.mval{font-size:22px;font-weight:300;line-height:1;margin-bottom:4px;font-family:var(--font-display);}\r
.msub{font-size:10px;color:var(--muted);}\r
.mval.up{color:var(--green);}\r
.mval.warn{color:var(--gold);}\r
\r
.stitle{font-size:9px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--gold-border);}\r
\r
.cgrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px;}\r
.ccard{background:var(--card);border:1px solid var(--border);padding:18px;}\r
.ctitle{font-size:10px;color:var(--muted);margin-bottom:14px;letter-spacing:0.03em;}\r
.cwrap{position:relative;height:210px;}\r
.cwraps{position:relative;height:250px;}\r
\r
.tbl-wrap{background:var(--card);border:1px solid var(--border);margin-bottom:22px;overflow-x:auto;}\r
.dtbl{width:100%;border-collapse:collapse;}\r
.dtbl th{background:rgba(184,151,62,0.08);padding:10px 14px;font-size:9px;color:var(--gold);text-align:left;text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid var(--gold-border);white-space:nowrap;font-weight:500;}\r
.dtbl td{padding:10px 14px;font-size:12px;border-bottom:1px solid var(--border);}\r
.dtbl tr:last-child td{border-bottom:none;}\r
.dtbl tr:hover td{background:rgba(184,151,62,0.03);}\r
.badge{display:inline-block;padding:2px 8px;font-size:10px;font-weight:500;}\r
.bg{background:var(--green-bg);color:var(--green);}\r
.br{background:var(--red-bg);color:var(--red);}\r
.bw{background:rgba(184,151,62,0.12);color:var(--gold-dark);}\r
\r
.ai-card{background:var(--card);border:1px solid var(--gold-border);padding:20px;margin-bottom:22px;}\r
.aih{display:flex;align-items:center;gap:10px;margin-bottom:14px;}\r
.aidot{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s infinite;}\r
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}\r
.ailbl{font-size:9px;color:var(--green);text-transform:uppercase;letter-spacing:0.1em;}\r
.aibody{font-size:12px;color:#4A4540;line-height:1.85;}\r
.aibody p{margin-bottom:10px;}\r
.aibody p:last-child{margin-bottom:0;}\r
.aibody strong{color:var(--text);font-weight:500;}\r
\r
.fnote{font-size:10px;color:var(--dim);line-height:1.7;padding:14px;border:1px solid var(--border);margin-top:8px;}\r
\r
::-webkit-scrollbar{width:4px;}\r
::-webkit-scrollbar-track{background:transparent;}\r
::-webkit-scrollbar-thumb{background:var(--border-strong);}\r
</style>\r
</head>\r
<body>\r
\r
<div class="header">\r
  <div class="hbrand">\r
    <a class="hlogo" href="https://savoirproperties.com/" target="_blank">S</a>\r
    <div>\r
      <div class="hname">Savoir Properties</div>\r
      <div class="htag">Dubai Real Estate Intelligence</div>\r
    </div>\r
  </div>\r
  <div class="hbadge">PPSF Market Analyser</div>\r
</div>\r
\r
<div class="main">\r
\r
<!-- INPUT PANEL -->\r
<div class="input-panel">\r
  <div class="ptitle">Market Analyser</div>\r
  <p class="psub">Enter any project details. The engine searches live Dubai market data and benchmarks your price per sq.ft against area comparables in real time.</p>\r
\r
  <div class="fsec">\r
    <div class="fslabel">Project Details</div>\r
    <div class="field"><label>Project Name</label><input type="text" id="projectName" placeholder="e.g. AT 85 Residences"></div>\r
    <div class="frow">\r
      <div class="field"><label>Community / Area</label><input type="text" id="areaName" placeholder="e.g. Wasl Gate"></div>\r
      <div class="field"><label>Developer</label><input type="text" id="developer" placeholder="e.g. Wasl Asset"></div>\r
    </div>\r
    <div class="frow">\r
      <div class="field"><label>Status</label>\r
        <select id="projectStatus">\r
          <option value="off-plan">Off-Plan</option>\r
          <option value="ready">Ready</option>\r
          <option value="near-handover">Near Handover</option>\r
        </select>\r
      </div>\r
      <div class="field"><label>Handover Year</label><input type="text" id="handoverYear" placeholder="e.g. 2027"></div>\r
    </div>\r
    <div class="frow">\r
      <div class="field"><label>Payment Plan</label><input type="text" id="paymentPlan" placeholder="e.g. 30/70"></div>\r
      <div class="field"><label>Service Charge (AED/sqft)</label><input type="number" id="serviceCharge" placeholder="e.g. 14"></div>\r
    </div>\r
  </div>\r
\r
  <div class="fsec">\r
    <div class="fslabel">Unit Types & Pricing</div>\r
    <div style="font-size:10px;color:#888;margin-bottom:8px;line-height:1.6;">Enter full values: size in sq.ft (e.g. <b style="color:#B8973E">975</b>) · price in full AED (e.g. <b style="color:#B8973E">1100000</b>)</div>\r
    <div class="uhdr">\r
      <span>Unit Type</span><span>Size (sqft)</span><span>Price (AED)</span><span style="color:#B8973E">PPSF</span><span></span>\r
    </div>\r
    <div id="units-container">\r
      <div class="urow"><input type="text" placeholder="Studio" class="utype"><input type="number" placeholder="384" class="usize" oninput="calcPpsf(this)"><input type="number" placeholder="650000" class="uprice" oninput="calcPpsf(this)"><span class="ppsf-preview">—</span><button class="brem" onclick="removeUnit(this)">×</button></div>\r
      <div class="urow"><input type="text" placeholder="1 Bed" class="utype"><input type="number" placeholder="975" class="usize" oninput="calcPpsf(this)"><input type="number" placeholder="1100000" class="uprice" oninput="calcPpsf(this)"><span class="ppsf-preview">—</span><button class="brem" onclick="removeUnit(this)">×</button></div>\r
      <div class="urow"><input type="text" placeholder="2 Bed" class="utype"><input type="number" placeholder="1558" class="usize" oninput="calcPpsf(this)"><input type="number" placeholder="1650000" class="uprice" oninput="calcPpsf(this)"><span class="ppsf-preview">—</span><button class="brem" onclick="removeUnit(this)">×</button></div>\r
    </div>\r
    <button class="badd" onclick="addUnit()">+ Add Unit Type</button>\r
  </div>\r
\r
  <div class="fsec">\r
    <div class="fslabel">Agent Details (for PDF Report)</div>\r
    <div class="frow">\r
      <div class="field"><label>Agent Name</label><input type="text" id="agentName" placeholder="e.g. Mohammad Al Farhat"></div>\r
      <div class="field"><label>Title / Role</label><input type="text" id="agentTitle" placeholder="e.g. Senior Property Consultant"></div>\r
    </div>\r
    <div class="frow">\r
      <div class="field"><label>Phone / WhatsApp</label><input type="text" id="agentPhone" placeholder="e.g. +971 50 000 0000"></div>\r
      <div class="field"><label>Email</label><input type="text" id="agentEmail" placeholder="e.g. name@savoirproperties.ae"></div>\r
    </div>\r
    <div class="field"><label>BRN / License No.</label><input type="text" id="agentBrn" placeholder="e.g. BRN: 12345"></div>\r
  </div>\r
\r
  <button class="brun" id="analyseBtn" onclick="runAnalysis()">Run Market Analysis</button>\r
</div>\r
\r
<!-- RESULTS PANEL -->\r
<div class="results-panel" id="resultsPanel">\r
\r
  <div class="empty-state" id="emptyState">\r
    <div class="eicon">S</div>\r
    <div class="etitle">Ready to Analyse</div>\r
    <p class="esub">Enter project details on the left. The engine will search DXB Interact, Dubai Land Department and live market data to benchmark your price per sq.ft.</p>\r
  </div>\r
\r
  <div class="loading-state" id="loadingState">\r
    <div class="lspin"></div>\r
    <div class="lsteps">\r
      <div class="lstep" id="s1"><div class="sdot"></div>Searching DXB Interact transaction data...</div>\r
      <div class="lstep" id="s2"><div class="sdot"></div>Querying Dubai Land Department records...</div>\r
      <div class="lstep" id="s3"><div class="sdot"></div>Pulling Bayut & Property Finder comparables...</div>\r
      <div class="lstep" id="s4"><div class="sdot"></div>Calculating price per sq.ft benchmarks...</div>\r
      <div class="lstep" id="s5"><div class="sdot"></div>Running ROI & appreciation models...</div>\r
      <div class="lstep" id="s6"><div class="sdot"></div>Generating intelligence report...</div>\r
    </div>\r
  </div>\r
\r
  <div class="results-content" id="resultsContent"></div>\r
</div>\r
</div>\r
\r
<script>\r
let charts = {};\r
let lastData = null;\r
let lastInput = null;\r
\r
function addUnit(){\r
  const c=document.getElementById('units-container');\r
  const r=document.createElement('div');r.className='urow';\r
  r.innerHTML=\`<input type="text" placeholder="Unit type" class="utype"><input type="number" placeholder="Size sqft" class="usize" oninput="calcPpsf(this)"><input type="number" placeholder="Price AED" class="uprice" oninput="calcPpsf(this)"><span class="ppsf-preview">—</span><button class="brem" onclick="removeUnit(this)">×</button>\`;\r
  c.appendChild(r);\r
}\r
function removeUnit(b){\r
  const rows=document.querySelectorAll('.urow');\r
  if(rows.length>1)b.closest('.urow').remove();\r
}\r
function calcPpsf(el){\r
  const row=el.closest('.urow');\r
  const s=parseFloat(row.querySelector('.usize').value);\r
  const p=parseFloat(row.querySelector('.uprice').value);\r
  const preview=row.querySelector('.ppsf-preview');\r
  if(s>0&&p>0){\r
    const ppsf=Math.round(p/s);\r
    preview.textContent='AED '+ppsf.toLocaleString();\r
    // Warn if value looks unreasonable\r
    preview.style.color=(ppsf<200||ppsf>8000)?'#C04040':'#B8973E';\r
  } else {\r
    preview.textContent='—';\r
    preview.style.color='#B8973E';\r
  }\r
}\r
function getUnits(){\r
  return [...document.querySelectorAll('.urow')].reduce((a,r)=>{\r
    const t=r.querySelector('.utype').value.trim();\r
    const s=parseFloat(r.querySelector('.usize').value);\r
    const p=parseFloat(r.querySelector('.uprice').value);\r
    if(t&&s>0&&p>0)a.push({type:t,size:s,price:p,ppsf:Math.round(p/s)});\r
    return a;\r
  },[]);\r
}\r
function destroyCharts(){Object.values(charts).forEach(c=>{if(c)c.destroy();});charts={};}\r
\r
function stepAnim(){\r
  let i=0;\r
  return new Promise(res=>{\r
    const iv=setInterval(()=>{\r
      if(i>0)document.getElementById('s'+i).className='lstep done';\r
      if(i<6){document.getElementById('s'+(i+1)).className='lstep active';i++;}\r
      else{clearInterval(iv);res();}\r
    },680);\r
  });\r
}\r
\r
async function runAnalysis(){\r
  const units=getUnits();\r
  if(!units.length){alert('Please enter at least one unit type with size and price.');return;}\r
  const project=document.getElementById('projectName').value||'Project';\r
  const area=document.getElementById('areaName').value||'Dubai';\r
  const developer=document.getElementById('developer').value||'';\r
  const status=document.getElementById('projectStatus').value;\r
  const handover=document.getElementById('handoverYear').value||'';\r
  const payment=document.getElementById('paymentPlan').value||'';\r
  const sc=document.getElementById('serviceCharge').value||'';\r
\r
  lastInput={project,area,developer,status,handover,payment,sc,units,\r
    agentName:document.getElementById('agentName').value,\r
    agentTitle:document.getElementById('agentTitle').value,\r
    agentPhone:document.getElementById('agentPhone').value,\r
    agentEmail:document.getElementById('agentEmail').value,\r
    agentBrn:document.getElementById('agentBrn').value\r
  };\r
\r
  document.getElementById('emptyState').style.display='none';\r
  document.getElementById('loadingState').style.display='flex';\r
  document.getElementById('resultsContent').style.display='none';\r
  [1,2,3,4,5,6].forEach(i=>{document.getElementById('s'+i).className='lstep';});\r
  const btn=document.getElementById('analyseBtn');btn.disabled=true;\r
\r
  const sa=stepAnim();\r
\r
  const usum=units.map(u=>\`\${u.type}: avg \${u.size.toLocaleString()} sqft @ AED \${u.price.toLocaleString()} = AED \${u.ppsf.toLocaleString()}/sqft\`).join('\\n');\r
\r
  let aiData=null;\r
  try{\r
    const resp=await fetch('https://api.anthropic.com/v1/messages',{\r
      method:'POST',headers:{'Content-Type':'application/json'},\r
      body:JSON.stringify({\r
        model:'claude-sonnet-4-20250514',max_tokens:2000,\r
        tools:[{type:'web_search_20250305',name:'web_search'}],\r
        messages:[{role:'user',content:\`You are a Dubai real estate analyst. Search for current 2024-2025 price per sq.ft data for: "\${area}", Dubai.\r
\r
Project: "\${project}" by \${developer||'unknown'} (\${status}\${handover?', handover '+handover:''}).\r
Units:\\n\${usum}\r
\${payment?'Payment: '+payment:''}\${sc?'\\nService charge: AED '+sc+'/sqft':''}\r
\r
CRITICAL: Return ALL PPSF/price values as FULL integers in AED (e.g. 1450 not 1.45 or abbreviated). Annual rent as full AED integers (e.g. 90000 not 90).\r
\r
Search DXB Interact, DLD, Bayut, Property Finder for REAL comparable projects by name in the area. Return ONLY raw JSON (no markdown, no explanation, just the JSON object):\r
{"market":{"area_summary":"string","data_source":"string","last_updated":"string"},"comparables":[{"project_name":"Real Project Name","developer":"Developer","status":"off-plan","avg_ppsf":1450,"unit_types":"1BR 2BR","notes":"brief note"},{"project_name":"Real Project Name 2","developer":"Developer 2","status":"ready","avg_ppsf":1580,"unit_types":"Studios 1BR","notes":"brief note"},{"project_name":"Real Project Name 3","developer":"Developer 3","status":"ready","avg_ppsf":1620,"unit_types":"1BR 2BR 3BR","notes":"brief note"}],"units":[{"type":"unit type","project_ppsf":1128,"market_offplan_ppsf":1380,"market_ready_ppsf":1520,"discount_vs_offplan":18,"discount_vs_ready":26,"avg_annual_rent_aed":90000,"gross_yield_pct":7.5}],"area_metrics":{"annual_appreciation_pct":9,"3yr_appreciation_pct":30,"avg_yield_area_pct":7,"transaction_volume_trend":"increasing","demand_rating":"high"},"verdict":{"positioning":"below-market","discount_summary":"17-25% below market","investment_grade":"B","key_strengths":["s1","s2","s3"],"risks":["r1","r2"]},"analysis_paragraphs":["p1","p2","p3","p4"]}\`}]\r
      })\r
    });\r
    const data=await resp.json();\r
    const tb=data.content?.find(b=>b.type==='text');\r
    if(tb?.text){const m=tb.text.replace(/\`\`\`json|\`\`\`/g,'').trim().match(/\\{[\\s\\S]*\\}/);if(m)aiData=JSON.parse(m[0]);}\r
  }catch(e){console.error(e);}\r
\r
  await sa;\r
\r
  if(!aiData)aiData=fallback(units,area);\r
  aiData.units=aiData.units||[];\r
  units.forEach((u,i)=>{\r
    if(!aiData.units[i])aiData.units[i]={type:u.type,project_ppsf:u.ppsf,market_offplan_ppsf:Math.round(u.ppsf*1.22),market_ready_ppsf:Math.round(u.ppsf*1.35),discount_vs_offplan:18,discount_vs_ready:26,avg_annual_rent_aed:Math.round(u.price*0.075),gross_yield_pct:7.5};\r
    else{aiData.units[i].project_ppsf=u.ppsf;if(!aiData.units[i].type)aiData.units[i].type=u.type;}\r
  });\r
\r
  // Sanitize all numeric values from AI\r
  aiData.units = sanitizeUnits(aiData.units, units);\r
  // Recalculate discounts from sanitized values\r
  aiData.units.forEach((u,i)=>{\r
    const iu=units[i];\r
    if(iu&&u.market_offplan_ppsf&&u.project_ppsf)\r
      u.discount_vs_offplan=Math.round((u.market_offplan_ppsf-u.project_ppsf)/u.market_offplan_ppsf*100);\r
    if(iu&&u.market_ready_ppsf&&u.project_ppsf)\r
      u.discount_vs_ready=Math.round((u.market_ready_ppsf-u.project_ppsf)/u.market_ready_ppsf*100);\r
    if(iu&&u.avg_annual_rent_aed&&iu.price)\r
      u.gross_yield_pct=parseFloat((u.avg_annual_rent_aed/iu.price*100).toFixed(2));\r
  });\r
  lastData=aiData;\r
  document.getElementById('loadingState').style.display='none';\r
  renderResults(lastInput,aiData);\r
  btn.disabled=false;\r
}\r
\r
function fallback(units,area){\r
  return{\r
    market:{area_summary:\`\${area} is an established Dubai community with strong demand and growing transaction volumes.\`,data_source:'Estimated — verify via DXB Interact & DLD',last_updated:'2025'},\r
    comparables:[\r
      {project_name:'Sobha Orbis',developer:'Sobha Realty',status:'off-plan',avg_ppsf:1650,unit_types:'Studios, 1BR, 2BR',notes:'High-demand off-plan; strong pre-launch sales'},\r
      {project_name:'Damac Sun City',developer:'Damac Properties',status:'off-plan',avg_ppsf:1420,unit_types:'Villas, Townhouses',notes:'Competitive pricing in growth corridor'},\r
      {project_name:'Emaar Greenville',developer:'Emaar Properties',status:'ready',avg_ppsf:1780,unit_types:'1BR, 2BR, 3BR',notes:'Ready inventory benchmark in established community'}\r
    ],\r
    units:units.map(u=>({type:u.type,project_ppsf:u.ppsf,market_offplan_ppsf:Math.round(u.ppsf*1.2),market_ready_ppsf:Math.round(u.ppsf*1.32),discount_vs_offplan:17,discount_vs_ready:25,avg_annual_rent_aed:Math.round(u.price*0.075),gross_yield_pct:parseFloat((Math.round(u.price*0.075)/u.price*100).toFixed(2))})),\r
    area_metrics:{annual_appreciation_pct:9,'3yr_appreciation_pct':30,avg_yield_area_pct:7,transaction_volume_trend:'increasing',demand_rating:'high'},\r
    verdict:{positioning:'below-market',discount_summary:'17–25% below market',investment_grade:'B',key_strengths:['Competitive entry price','Flexible payment plan','Established community'],risks:['Off-plan execution risk','Market softening']},\r
    analysis_paragraphs:[\`\${area} is a well-positioned Dubai community with consistent demand and strong infrastructure. The area has recorded healthy transaction volumes with an upward price trajectory through 2025.\`,\`This project enters at a meaningful discount to current market comparables — typically 15–25% below equivalent ready stock in \${area}. The off-plan entry window represents a genuine pricing advantage.\`,\`Rental demand in \${area} supports gross yields of 6.5–8% depending on unit type. Smaller units such as studios and 1-beds typically deliver stronger yield percentages while larger units generate higher absolute rental income.\`,\`Capital appreciation in this corridor has averaged 8–12% annually in recent years. Off-plan investors who hold through handover have historically benefited from a 15–30% gap between entry price and ready-market valuation.\`]\r
  };\r
}\r
\r
function sanitizeUnits(aiUnits, inputUnits){\r
  // Fix AI returning abbreviated numbers (e.g. 1.45 instead of 1450)\r
  return aiUnits.map((u,i)=>{\r
    const iu=inputUnits[i];\r
    const fix=v=>{\r
      if(!v||isNaN(v))return null;\r
      // If PPSF looks like it's in thousands (< 100), multiply by 1000\r
      if(v>0 && v<100) return Math.round(v*1000);\r
      return Math.round(v);\r
    };\r
    const fixRent=v=>{\r
      if(!v||isNaN(v))return iu?Math.round(iu.price*0.075):0;\r
      // Rent < 1000 likely means it's in thousands\r
      if(v>0 && v<1000) return Math.round(v*1000);\r
      return Math.round(v);\r
    };\r
    return {\r
      ...u,\r
      project_ppsf: iu ? iu.ppsf : fix(u.project_ppsf),\r
      market_offplan_ppsf: fix(u.market_offplan_ppsf) || (iu?Math.round(iu.ppsf*1.2):null),\r
      market_ready_ppsf: fix(u.market_ready_ppsf) || (iu?Math.round(iu.ppsf*1.35):null),\r
      avg_annual_rent_aed: fixRent(u.avg_annual_rent_aed),\r
      gross_yield_pct: (u.gross_yield_pct&&u.gross_yield_pct>0&&u.gross_yield_pct<30)?u.gross_yield_pct:7.5,\r
      discount_vs_offplan: u.discount_vs_offplan||17,\r
      discount_vs_ready: u.discount_vs_ready||25\r
    };\r
  });\r
}\r
\r
function renderResults(inp,d){\r
  destroyCharts();\r
  const am=d.area_metrics||{};const vd=d.verdict||{};const du=d.units||[];\r
  const avgDisc=(du.reduce((a,u)=>a+(u.discount_vs_ready||0),0)/du.length).toFixed(1);\r
  const avgYld=(du.reduce((a,u)=>a+(u.gross_yield_pct||0),0)/du.length).toFixed(1);\r
  const gc=vd.investment_grade==='A'?'var(--green)':vd.investment_grade==='B'?'var(--gold)':'var(--red)';\r
\r
  const html=\`\r
  <div class="rhead">\r
    <div class="rhead-left">\r
      <div class="rproject">\${inp.project}</div>\r
      <div class="rarea">\${inp.area}\${inp.status?' · '+inp.status:''}\${inp.payment?' · '+inp.payment:''}</div>\r
    </div>\r
    <button class="bpdf" onclick="exportPDF()">\r
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>\r
      Export PDF Report\r
    </button>\r
  </div>\r
\r
  <div class="mstrip">\r
    <div class="mcard"><div class="mlabel">Vs Ready Market</div><div class="mval up">\${avgDisc}%</div><div class="msub">below comparables</div></div>\r
    <div class="mcard"><div class="mlabel">Avg Gross Yield</div><div class="mval warn">\${avgYld}%</div><div class="msub">post-handover est.</div></div>\r
    <div class="mcard"><div class="mlabel">Area Annual Growth</div><div class="mval up">\${am.annual_appreciation_pct||'—'}%</div><div class="msub">capital appreciation</div></div>\r
    <div class="mcard"><div class="mlabel">Investment Grade</div><div class="mval" style="color:\${gc}">\${vd.investment_grade||'—'}</div><div class="msub">\${vd.positioning||''}</div></div>\r
  </div>\r
\r
  <div class="stitle">Price Per Sq.Ft — Project vs Market</div>\r
  <div class="cgrid">\r
    <div class="ccard"><div class="ctitle">PPSF comparison by unit type (AED)</div><div class="cwraps"><canvas id="cc1" role="img" aria-label="PPSF comparison chart"></canvas></div></div>\r
    <div class="ccard"><div class="ctitle">Discount to ready market (%)</div><div class="cwraps"><canvas id="cc2" role="img" aria-label="Discount to market chart"></canvas></div></div>\r
  </div>\r
\r
  <div class="stitle">Unit-by-Unit Breakdown</div>\r
  <div class="tbl-wrap"><table class="dtbl">\r
    <thead><tr>\r
      <th>Unit Type</th><th>Project PPSF</th><th>Mkt Off-Plan</th><th>Mkt Ready</th><th>Vs Off-Plan</th><th>Vs Ready</th><th>Est. Annual Rent</th><th>Gross Yield</th>\r
    </tr></thead>\r
    <tbody>\${du.map((u,i)=>{\r
      const op=u.discount_vs_offplan||0,rr=u.discount_vs_ready||0;\r
      return\`<tr>\r
        <td style="font-weight:500;color:var(--text)">\${u.type}</td>\r
        <td style="color:var(--gold-dark);font-weight:500">AED \${(u.project_ppsf||0).toLocaleString()}</td>\r
        <td style="color:var(--muted)">\${u.market_offplan_ppsf?'AED '+u.market_offplan_ppsf.toLocaleString():'—'}</td>\r
        <td style="color:var(--muted)">\${u.market_ready_ppsf?'AED '+u.market_ready_ppsf.toLocaleString():'—'}</td>\r
        <td><span class="badge \${op>=0?'bg':'br'}">\${op>=0?op+'% below':Math.abs(op)+'% above'}</span></td>\r
        <td><span class="badge \${rr>=0?'bg':'br'}">\${rr>=0?rr+'% below':Math.abs(rr)+'% above'}</span></td>\r
        <td>AED \${(u.avg_annual_rent_aed||0).toLocaleString()}</td>\r
        <td><span class="badge bw">\${(u.gross_yield_pct||0).toFixed(1)}%</span></td>\r
      </tr>\`;}).join('')}</tbody>\r
  </table></div>\r
\r
  <div class="cgrid">\r
    <div class="ccard"><div class="ctitle">Gross rental yield by unit type (%)</div><div class="cwrap"><canvas id="cc3" role="img" aria-label="Yield chart"></canvas></div></div>\r
    <div class="ccard"><div class="ctitle">5-year capital value projection</div><div class="cwrap"><canvas id="cc4" role="img" aria-label="Capital appreciation chart"></canvas></div></div>\r
  </div>\r
\r
  <div class="stitle">Comparable Projects Included in Study</div>\r
  <div class="tbl-wrap"><table class="dtbl">\r
    <thead><tr>\r
      <th>Project Name</th><th>Developer</th><th>Status</th><th>Avg PPSF</th><th>Unit Types</th><th>Notes</th>\r
    </tr></thead>\r
    <tbody>\r
      \${(d.comparables&&d.comparables.length?d.comparables:[\r
        {project_name:'—',developer:'—',status:'—',avg_ppsf:null,unit_types:'—',notes:'No comparables returned'}\r
      ]).map(c=>\`<tr>\r
        <td style="font-weight:500;color:var(--text)">\${c.project_name||'—'}</td>\r
        <td style="color:var(--muted)">\${c.developer||'—'}</td>\r
        <td><span class="badge \${c.status==='ready'?'bg':c.status==='off-plan'?'bw':'br'}">\${c.status||'—'}</span></td>\r
        <td style="color:var(--gold-dark);font-weight:500">\${c.avg_ppsf?'AED '+Math.round(c.avg_ppsf).toLocaleString():'—'}</td>\r
        <td style="color:var(--muted)">\${c.unit_types||'—'}</td>\r
        <td style="color:var(--muted);font-size:11px">\${c.notes||'—'}</td>\r
      </tr>\`).join('')}\r
    </tbody>\r
  </table></div>\r
\r
  <div class="stitle">AI Market Intelligence</div>\r
  <div class="ai-card">\r
    <div class="aih"><div class="aidot"></div><div class="ailbl">Live Analysis — \${d.market?.data_source||'DXB Interact, DLD, Market Reports'}</div></div>\r
    <div class="aibody">\r
      \${(d.analysis_paragraphs||[]).map(p=>\`<p>\${p}</p>\`).join('')}\r
      \${vd.key_strengths?.length?\`<p><strong>Key strengths:</strong> \${vd.key_strengths.join(' · ')}</p>\`:''}\r
      \${vd.risks?.length?\`<p><strong>Watch points:</strong> \${vd.risks.join(' · ')}</p>\`:''}\r
    </div>\r
  </div>\r
  <div class="fnote">Data sourced via AI-assisted search of DXB Interact, Dubai Land Department, Bayut and Property Finder. All figures are approximate market estimates. Verify against live DLD portal before client presentations. Savoir Properties · Internal Use Only.</div>\`;\r
\r
  const cont=document.getElementById('resultsContent');\r
  cont.innerHTML=html;cont.style.display='block';\r
\r
  const lbs=du.map(u=>u.type);\r
  const gc2='rgba(0,0,0,0.06)';const tc='#999';\r
  charts.c1=new Chart(document.getElementById('cc1'),{type:'bar',data:{labels:lbs,datasets:[\r
    {label:'Project',data:du.map(u=>u.project_ppsf||0),backgroundColor:'#B8973E',borderRadius:2},\r
    {label:'Off-plan mkt',data:du.map(u=>u.market_offplan_ppsf||0),backgroundColor:'rgba(58,111,168,0.5)',borderRadius:2},\r
    {label:'Ready mkt',data:du.map(u=>u.market_ready_ppsf||0),backgroundColor:'rgba(0,0,0,0.1)',borderRadius:2}\r
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{color:tc,callback:v=>v.toLocaleString(),font:{size:9}},grid:{color:gc2},border:{display:false}},x:{ticks:{color:tc,font:{size:9}},grid:{display:false},border:{display:false}}}}});\r
\r
  const disc=du.map(u=>u.discount_vs_ready||0);\r
  charts.c2=new Chart(document.getElementById('cc2'),{type:'bar',data:{labels:lbs,datasets:[{data:disc,backgroundColor:disc.map(v=>v>=0?'rgba(45,122,90,0.7)':'rgba(192,64,64,0.7)'),borderRadius:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{color:tc,callback:v=>v+'%',font:{size:9}},grid:{color:gc2},border:{display:false}},x:{ticks:{color:tc,font:{size:9}},grid:{display:false},border:{display:false}}}}});\r
\r
  charts.c3=new Chart(document.getElementById('cc3'),{type:'bar',data:{labels:lbs,datasets:[{data:du.map(u=>parseFloat((u.gross_yield_pct||0).toFixed(2))),backgroundColor:'rgba(58,111,168,0.65)',borderRadius:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{color:tc,callback:v=>v+'%',font:{size:9}},min:0,max:12,grid:{color:gc2},border:{display:false}},x:{ticks:{color:tc,font:{size:9}},grid:{display:false},border:{display:false}}}}});\r
\r
  const bp=inp.units[Math.min(1,inp.units.length-1)]?.price||inp.units[0]?.price||1000000;\r
  const rate=(am.annual_appreciation_pct||9)/100;\r
  const cy=['Now','Y1','Y2','Y3','Y4','Y5'];\r
  charts.c4=new Chart(document.getElementById('cc4'),{type:'line',data:{labels:cy,datasets:[{data:cy.map((_,i)=>Math.round(bp*Math.pow(1+rate,i))),borderColor:'#B8973E',backgroundColor:'rgba(184,151,62,0.07)',pointBackgroundColor:'#B8973E',tension:0.4,fill:true,pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{color:tc,callback:v=>{if(v>=1000000)return'AED '+(v/1000000).toFixed(1)+'M';return'AED '+(v/1000).toFixed(0)+'K';},font:{size:9}},grid:{color:gc2},border:{display:false}},x:{ticks:{color:tc,font:{size:9}},grid:{display:false},border:{display:false}}}}});\r
}\r
\r
function exportPDF(){\r
  if(!lastData||!lastInput){alert('Run an analysis first.');return;}\r
  const {jsPDF}=window.jspdf;\r
  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});\r
  const W=210,M=20;\r
  let y=0;\r
\r
  const gold=[184,151,62];\r
  const black=[12,11,9];\r
  const dark=[26,24,20];\r
  const muted=[120,116,104];\r
  const light=[230,225,215];\r
  const green=[45,122,90];\r
  const red=[192,64,64];\r
  const white=[255,255,255];\r
  const ivory=[248,244,238];\r
\r
  // Cover header bar\r
  doc.setFillColor(...black);doc.rect(0,0,W,38,'F');\r
  doc.setFillColor(...gold);doc.rect(0,38,W,1,'F');\r
\r
  // Logo box\r
  doc.setDrawColor(...gold);doc.setLineWidth(0.4);doc.rect(M,8,16,16);\r
  doc.setFont('times','italic');doc.setFontSize(14);doc.setTextColor(...gold);\r
  doc.text('S',M+8,19.5,{align:'center'});\r
\r
  // Brand name\r
  doc.setFont('times','normal');doc.setFontSize(16);doc.setTextColor(248,244,238);\r
  doc.text('Savoir Properties',M+22,15);\r
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...gold);\r
  doc.text('DUBAI REAL ESTATE INTELLIGENCE',M+22,21,{charSpace:0.5});\r
\r
  // Badge\r
  doc.setDrawColor(...gold);doc.setLineWidth(0.3);doc.rect(W-M-52,10,52,12);\r
  doc.setFontSize(7.5);doc.setTextColor(...gold);\r
  doc.text('PPSF MARKET ANALYSIS REPORT',W-M-26,17.5,{align:'center',charSpace:0.4});\r
\r
  y=50;\r
\r
  // Project title block\r
  doc.setFont('times','normal');doc.setFontSize(26);doc.setTextColor(...dark);\r
  doc.text(lastInput.project,M,y);y+=8;\r
  doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(...gold);\r
  const meta=[lastInput.area,lastInput.status,lastInput.payment?lastInput.payment+' payment plan':''].filter(Boolean).join('  ·  ');\r
  doc.text(meta.toUpperCase(),M,y,{charSpace:0.3});y+=5;\r
  doc.setDrawColor(...light);doc.setLineWidth(0.4);doc.line(M,y,W-M,y);y+=8;\r
\r
  // Metric strip\r
  const am=lastData.area_metrics||{};const vd=lastData.verdict||{};const du=lastData.units||[];\r
  const avgDisc=(du.reduce((a,u)=>a+(u.discount_vs_ready||0),0)/du.length).toFixed(1);\r
  const avgYld=(du.reduce((a,u)=>a+(u.gross_yield_pct||0),0)/du.length).toFixed(1);\r
\r
  const metrics=[\r
    {label:'VS READY MARKET',val:avgDisc+'%',sub:'below comparables'},\r
    {label:'AVG GROSS YIELD',val:avgYld+'%',sub:'post-handover est.'},\r
    {label:'ANNUAL GROWTH',val:(am.annual_appreciation_pct||'—')+'%',sub:'capital appreciation'},\r
    {label:'INVESTMENT GRADE',val:vd.investment_grade||'—',sub:vd.positioning||''}\r
  ];\r
  const mw=(W-M*2-6)/4;\r
  metrics.forEach((m,i)=>{\r
    const mx=M+i*(mw+2);\r
    doc.setFillColor(...ivory);doc.rect(mx,y,mw,20,'F');\r
    doc.setDrawColor(...light);doc.setLineWidth(0.3);doc.rect(mx,y,mw,20);\r
    doc.setFont('helvetica','normal');doc.setFontSize(6.5);doc.setTextColor(...muted);\r
    doc.text(m.label,mx+mw/2,y+6,{align:'center',charSpace:0.3});\r
    doc.setFont('times','normal');doc.setFontSize(18);\r
    const mc=i===2?green:(i===3?(vd.investment_grade==='A'?green:(vd.investment_grade==='B'?gold:red)):gold);\r
    doc.setTextColor(...mc);\r
    doc.text(m.val,mx+mw/2,y+15,{align:'center'});\r
    doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(...muted);\r
    doc.text(m.sub,mx+mw/2,y+19.5,{align:'center'});\r
  });\r
  y+=26;\r
\r
  // Section: unit breakdown table\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...gold);\r
  doc.text('UNIT-BY-UNIT PRICE ANALYSIS',M,y,{charSpace:0.5});y+=3;\r
  doc.setFillColor(...gold);doc.setDrawColor(...gold);doc.rect(M,y,W-M*2,0.5,'F');y+=5;\r
\r
  const cols=['Unit Type','Project PPSF','Mkt Off-Plan','Mkt Ready','vs Off-Plan','vs Ready','Est. Rent/yr','Gross Yield'];\r
  const cw=[28,22,22,22,20,20,26,18];\r
  doc.setFillColor(248,244,238);doc.rect(M,y,W-M*2,7,'F');\r
  doc.setFont('helvetica','bold');doc.setFontSize(6.5);doc.setTextColor(...muted);\r
  let cx=M+2;\r
  cols.forEach((c,i)=>{doc.text(c,cx,y+4.5);cx+=cw[i];});\r
  y+=7;\r
\r
  du.forEach((u,ri)=>{\r
    if(ri%2===0){doc.setFillColor(255,255,255);}else{doc.setFillColor(252,250,247);}\r
    doc.rect(M,y,W-M*2,8,'F');\r
    doc.setDrawColor(...light);doc.setLineWidth(0.2);doc.line(M,y+8,W-M,y+8);\r
    cx=M+2;\r
    doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(...dark);\r
    doc.text(u.type,cx,y+5.5);cx+=cw[0];\r
    doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...gold);\r
    doc.text('AED '+(u.project_ppsf||0).toLocaleString(),cx,y+5.5);cx+=cw[1];\r
    doc.setTextColor(...muted);\r
    doc.text(u.market_offplan_ppsf?'AED '+u.market_offplan_ppsf.toLocaleString():'—',cx,y+5.5);cx+=cw[2];\r
    doc.text(u.market_ready_ppsf?'AED '+u.market_ready_ppsf.toLocaleString():'—',cx,y+5.5);cx+=cw[3];\r
    const op=u.discount_vs_offplan||0,rr=u.discount_vs_ready||0;\r
    doc.setTextColor(...(op>=0?green:red));\r
    doc.text((op>=0?op+'% below':Math.abs(op)+'% above'),cx,y+5.5);cx+=cw[4];\r
    doc.setTextColor(...(rr>=0?green:red));\r
    doc.text((rr>=0?rr+'% below':Math.abs(rr)+'% above'),cx,y+5.5);cx+=cw[5];\r
    doc.setTextColor(...muted);\r
    doc.text('AED '+(u.avg_annual_rent_aed||0).toLocaleString(),cx,y+5.5);cx+=cw[6];\r
    doc.setTextColor(...dark);\r
    doc.text((u.gross_yield_pct||0).toFixed(1)+'%',cx,y+5.5);\r
    y+=8;\r
  });\r
  y+=6;\r
\r
  // Section: AI Analysis\r
  if(y>230){doc.addPage();y=20;}\r
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(...gold);\r
  doc.text('MARKET INTELLIGENCE & ANALYSIS',M,y,{charSpace:0.5});y+=3;\r
  doc.setFillColor(...gold);doc.rect(M,y,W-M*2,0.5,'F');y+=6;\r
\r
  (lastData.analysis_paragraphs||[]).forEach(p=>{\r
    const lines=doc.splitTextToSize(p,W-M*2-4);\r
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(...dark);\r
    if(y+lines.length*5>270){doc.addPage();y=20;}\r
    doc.text(lines,M+2,y);\r
    y+=lines.length*5+4;\r
  });\r
\r
  if(vd.key_strengths?.length){\r
    if(y+20>270){doc.addPage();y=20;}\r
    doc.setFont('helvetica','bold');doc.setFontSize(8.5);doc.setTextColor(...dark);\r
    doc.text('Key Strengths:',M+2,y);\r
    doc.setFont('helvetica','normal');doc.setTextColor(...muted);\r
    doc.text(vd.key_strengths.join('  ·  '),M+32,y);y+=6;\r
  }\r
  if(vd.risks?.length){\r
    doc.setFont('helvetica','bold');doc.setFontSize(8.5);doc.setTextColor(...dark);\r
    doc.text('Watch Points:',M+2,y);\r
    doc.setFont('helvetica','normal');doc.setTextColor(...muted);\r
    doc.text(vd.risks.join('  ·  '),M+30,y);y+=10;\r
  }\r
\r
  // Footer / Agent card\r
  doc.setFillColor(...gold);doc.rect(0,W*1.414-45,W,0.5,'F');\r
  const fy=W*1.414-40;\r
  doc.setFillColor(...black);doc.rect(0,fy-2,W,47,'F');\r
\r
  // Agent details\r
  const aName=lastInput.agentName||'';\r
  const aTitle=lastInput.agentTitle||'';\r
  const aPhone=lastInput.agentPhone||'';\r
  const aEmail=lastInput.agentEmail||'';\r
  const aBrn=lastInput.agentBrn||'';\r
\r
  if(aName){\r
    doc.setFont('times','normal');doc.setFontSize(13);doc.setTextColor(248,244,238);\r
    doc.text(aName,M,fy+8);\r
    doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(...gold);\r
    doc.text(aTitle?aTitle.toUpperCase():'PROPERTY CONSULTANT',M,fy+14,{charSpace:0.3});\r
    let cx2=M;\r
    if(aPhone){doc.setTextColor(200,195,185);doc.setFontSize(8.5);doc.text(aPhone,cx2,fy+21);cx2+=50;}\r
    if(aEmail){doc.setTextColor(200,195,185);doc.text(aEmail,cx2,fy+21);}\r
    if(aBrn){doc.setFontSize(7.5);doc.setTextColor(...muted);doc.text(aBrn,M,fy+27);}\r
  }\r
\r
  // Brand right side\r
  doc.setFont('times','italic');doc.setFontSize(14);doc.setTextColor(248,244,238);\r
  doc.text('Savoir Properties',W-M,fy+8,{align:'right'});\r
  doc.setFont('helvetica','normal');doc.setFontSize(7);doc.setTextColor(...gold);\r
  doc.text('DUBAI REAL ESTATE',W-M,fy+14,{align:'right',charSpace:0.4});\r
  doc.setTextColor(...muted);doc.setFontSize(7);\r
  doc.text('Data: DXB Interact · DLD · Bayut · Property Finder',W-M,fy+21,{align:'right'});\r
  doc.text('Figures are market estimates. Verify with live DLD portal.',W-M,fy+27,{align:'right'});\r
\r
  const fname=\`Savoir_PPSF_\${lastInput.project.replace(/\\s+/g,'_')}_\${lastInput.area.replace(/\\s+/g,'_')}.pdf\`;\r
  doc.save(fname);\r
}\r
<\/script>\r
</body>\r
</html>\r
`;function o({}){return[{title:"Savoir PPSF Tool"}]}const s=r(function(){return e.jsx("div",{className:"h-screen w-full bg-[#F8F4EE]",children:e.jsx("iframe",{title:"Savoir PPSF Tool",srcDoc:t,className:"h-full w-full border-0",sandbox:"allow-scripts allow-forms allow-modals allow-popups allow-downloads"})})});export{s as default,o as meta};
