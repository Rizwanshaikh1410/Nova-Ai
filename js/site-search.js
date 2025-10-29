// Improved search using static search-index.json for instant results
async function loadIndex(){
  try{
    const resp = await fetch('/search-index.json');
    const idx = await resp.json();
    return idx;
  }catch(e){
    console.error('Could not load search index', e);
    return [];
  }
}

function createResultsContainer(){
  let out = document.getElementById('searchResults');
  if(!out){
    out = document.createElement('div');
    out.id = 'searchResults';
    out.style.position='fixed';
    out.style.left='50%';
    out.style.top='100px';
    out.style.transform='translateX(-50%)';
    out.style.zIndex=9999;
    out.style.width='min(800px, 92%)';
    out.style.maxHeight='60vh';
    out.style.overflow='auto';
    out.style.background='var(--card)';
    out.style.padding='18px';
    out.style.borderRadius='12px';
    out.style.boxShadow='0 12px 40px rgba(2,6,23,0.45)';
    document.body.appendChild(out);
  }
  return out;
}

function renderResults(results, container){
  container.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <strong style="font-size:18px">Search Results (${results.length})</strong>
    <button id="closeSearchResults" class="btn btn-sm">Close</button>
  </div>`;
  if(results.length===0){
    container.innerHTML += '<p style="color:var(--muted)">No results found for your query.</p>';
    return;
  }
  const list = document.createElement('div');
  list.style.display='grid';
  list.style.gridTemplateColumns='1fr';
  list.style.gap='10px';
  results.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'card-custom';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <a href="${r.url}" style="font-weight:700;color:var(--text);text-decoration:none">${r.title}</a>
        <div style="color:var(--muted);font-size:13px">${r.category || ''}</div>
        <p style="margin-top:8px;color:var(--muted);font-size:14px">${r.snippet || ''}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <a class="visit-btn" href="${r.official || '#'}" target="_blank" rel="noopener noreferrer">${r.official ? 'Official' : 'Official'}</a>
        <a class="btn btn-outline-secondary" href="${r.url}">View Details</a>
      </div>
    </div>`;
    list.appendChild(card);
  });
  container.appendChild(list);
  document.getElementById('closeSearchResults')?.addEventListener('click', function(){ document.getElementById('searchResults').remove(); });
}

document.getElementById('searchBtn')?.addEventListener('click', async function(){
  const q = document.getElementById('siteSearch').value.trim().toLowerCase();
  const cat = (document.getElementById('filterCategory')?.value || '').toLowerCase();
  if(!q && !cat){ alert('Type a search term or choose a category'); return; }
  const idx = await loadIndex();
  const results = idx.filter(item=>{
    const matchQ = !q || (item.title && item.title.toLowerCase().includes(q)) || (item.snippet && item.snippet.toLowerCase().includes(q));
    const matchC = !cat || (item.category && item.category.toLowerCase().includes(cat));
    return matchQ && matchC;
  });
  const container = createResultsContainer();
  renderResults(results, container);
});

// allow Enter key
document.getElementById('siteSearch')?.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ document.getElementById('searchBtn').click(); }});
