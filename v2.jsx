// Variation B — Hero illustration (lunchbox dessinée à la main)
// Plus éditorial, fond crème, encres manuscrites, photos en cartes polaroid

function V2Illustration(){
  const cream = '#F8EFDC';
  const orange = '#E87A2B';
  const orangeDeep = '#B84A0F';
  const green = '#2F5D2A';
  const ink = '#231308';
  const gold = '#D9A441';

  const Polaroid = ({label, h=220, tilt=0}) => (
    <div style={{
      background:'#fff', padding:'10px 10px 36px', borderRadius:2,
      boxShadow:'0 14px 28px rgba(0,0,0,.18)', transform:`rotate(${tilt}deg)`,
      width:'100%',
    }}>
      <div style={{
        height:h, borderRadius:2,
        background:`linear-gradient(135deg, #C7421A, #E87A2B 50%, #F3B25A)`,
        display:'flex', alignItems:'center', justifyContent:'center',
        color:'rgba(255,255,255,.85)', fontFamily:'Caveat, cursive', fontSize:60,
      }}>🍛</div>
      <div style={{textAlign:'center', fontFamily:'Caveat, cursive', fontSize:24, color:ink, marginTop:8}}>{label}</div>
    </div>
  );

  return (
    <div style={{background:cream, color:ink, fontFamily:'Inter, sans-serif', minHeight:'100%'}}>

      {/* Top nav */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'24px 60px', borderBottom:`1px solid rgba(35,19,8,.12)`
      }}>
        <span style={{fontFamily:'Caveat, cursive', fontSize:38, color:green, fontWeight:700}}>The Lunch Box</span>
        <div style={{display:'flex', gap:36, fontSize:14, fontWeight:600, letterSpacing:.5, textTransform:'uppercase', color:ink}}>
          <a href="#story" style={{color:'inherit', textDecoration:'none'}}>Le restaurant</a>
          <a href="#cuisine" style={{color:'inherit', textDecoration:'none'}}>La cuisine</a>
          <a href="#horaires" style={{color:'inherit', textDecoration:'none'}}>Horaires</a>
          <a href="#contact" style={{color:'inherit', textDecoration:'none'}}>Contact</a>
        </div>
        <a href="tel:0665757718" style={{
          background:orangeDeep, color:'#fff', padding:'12px 22px', borderRadius:4,
          textDecoration:'none', fontWeight:700, fontSize:14, letterSpacing:.4
        }}>📞 06 65 75 77 18</a>
      </div>

      {/* HERO */}
      <div style={{padding:'80px 100px 60px', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:60, alignItems:'center'}}>
        <div>
          <div style={{fontFamily:'Caveat, cursive', fontSize:36, color:orange, marginBottom:6}}>nouveau à Nantes ·</div>
          <h1 style={{
            fontFamily:'Fraunces, serif', fontWeight:600, margin:0,
            fontSize:108, lineHeight:.95, letterSpacing:'-.02em',
          }}>
            Une cuisine <em style={{color:orangeDeep, fontStyle:'italic'}}>indienne</em>,<br/>
            <span style={{fontFamily:'Caveat, cursive', fontSize:140, color:green, fontWeight:700, lineHeight:1, display:'inline-block', transform:'translateY(8px)'}}>faite à la main.</span>
          </h1>
          <p style={{fontSize:22, lineHeight:1.55, marginTop:30, maxWidth:540}}>
            Lunch box à partir de <strong>8&nbsp;€</strong>, à venir chercher
            au 2&nbsp;rue de la Montagne, 44100&nbsp;Nantes.
            Légumes bio, viande locale, épices choisies une à une par Richard.
          </p>
          <div style={{display:'flex', gap:14, marginTop:32}}>
            <a href="tel:0665757718" style={{
              background:ink, color:cream, padding:'18px 28px', borderRadius:6,
              textDecoration:'none', fontSize:18, fontWeight:700,
            }}>📞 Commander · 06 65 75 77 18</a>
            <a href="#cuisine" style={{
              background:'transparent', color:ink, padding:'18px 28px', borderRadius:6,
              textDecoration:'none', fontSize:18, fontWeight:600, border:`2px solid ${ink}`,
            }}>Voir la cuisine</a>
          </div>
          <div style={{display:'flex', gap:24, marginTop:30, fontSize:15, opacity:.75}}>
            <span>✓ végétarien & non-végé</span>
            <span>✓ bio & local</span>
            <span>✓ à emporter / sur place</span>
          </div>
        </div>

        {/* Big illustrated lunchbox */}
        <div style={{position:'relative', display:'flex', justifyContent:'center'}}>
          <svg width="440" height="520" viewBox="0 0 440 520" fill="none" style={{filter:'drop-shadow(0 24px 40px rgba(0,0,0,.18))'}}>
            {/* steam */}
            <path d="M150 60 Q 140 30 160 10" stroke={ink} strokeWidth="3" fill="none" opacity=".4"/>
            <path d="M220 50 Q 230 20 215 0" stroke={ink} strokeWidth="3" fill="none" opacity=".4"/>
            <path d="M290 60 Q 280 30 300 10" stroke={ink} strokeWidth="3" fill="none" opacity=".4"/>
            {/* handle */}
            <path d="M120 110 C 120 50, 320 50, 320 110" stroke={ink} strokeWidth="5" fill="none"/>
            <circle cx="120" cy="110" r="8" fill={ink}/>
            <circle cx="320" cy="110" r="8" fill={ink}/>
            <rect x="210" y="78" width="20" height="20" rx="3" fill={ink}/>
            {/* tiers */}
            {[0,1,2,3].map(i=>(
              <g key={i}>
                <rect x="100" y={120+i*90} width="240" height="84" rx="6" fill={i%2? '#F4DDB5':'#EBC68A'} stroke={ink} strokeWidth="4"/>
                <rect x="100" y={120+i*90} width="240" height="14" rx="3" fill="rgba(0,0,0,.08)"/>
              </g>
            ))}
            {/* food peeking */}
            <circle cx="160" cy="160" r="10" fill={orangeDeep}/>
            <circle cx="200" cy="158" r="8" fill={green}/>
            <circle cx="240" cy="160" r="9" fill={gold}/>
            <circle cx="280" cy="158" r="7" fill={orange}/>
            {/* base */}
            <ellipse cx="220" cy="490" rx="160" ry="14" fill={ink} opacity=".15"/>
            {/* hand-drawn label */}
            <text x="220" y="60" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="44" fill={green} fontWeight="700">The Lunch Box</text>
          </svg>
          {/* sticker */}
          <div style={{
            position:'absolute', top:20, right:0, width:120, height:120, borderRadius:'50%',
            background:orange, color:'#fff', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', transform:'rotate(-12deg)',
            fontFamily:'Caveat, cursive', boxShadow:'0 8px 18px rgba(232,122,43,.5)',
          }}>
            <span style={{fontSize:18, lineHeight:1}}>à partir de</span>
            <span style={{fontSize:54, fontWeight:700, lineHeight:1}}>8€</span>
          </div>
        </div>
      </div>

      {/* HORAIRES strip */}
      <div id="horaires" style={{background:ink, color:cream, padding:'50px 100px'}}>
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr 1fr 1fr', gap:40, alignItems:'center'}}>
          <div>
            <div style={{fontFamily:'Caveat, cursive', fontSize:42, color:gold}}>Quand venir ?</div>
            <div style={{fontSize:13, opacity:.6, letterSpacing:.6, textTransform:'uppercase'}}>Horaires d'ouverture</div>
          </div>
          {[
            {d:'Mardi · Vendredi', t:'12h → 14h'},
            {d:'Jeudi · Dimanche soir', t:'18h → 20h30'},
            {d:'Samedi soir', t:'au restaurant'},
          ].map((s,i)=>(
            <div key={i} style={{borderLeft:`2px solid ${gold}`, paddingLeft:20}}>
              <div style={{fontSize:14, opacity:.7, letterSpacing:.4, textTransform:'uppercase'}}>{s.d}</div>
              <div style={{fontFamily:'Fraunces, serif', fontSize:32, fontWeight:600, marginTop:4}}>{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CUISINE / GALLERY */}
      <div id="cuisine" style={{padding:'90px 100px'}}>
        <div style={{textAlign:'center', marginBottom:50}}>
          <div style={{fontFamily:'Caveat, cursive', fontSize:38, color:orange}}>la cuisine</div>
          <h2 style={{fontFamily:'Fraunces, serif', fontSize:64, fontWeight:600, margin:'0 0 14px'}}>Végé ou non-végé,<br/>toujours généreux.</h2>
          <p style={{fontSize:18, opacity:.75, maxWidth:640, margin:'0 auto'}}>
            Chaque lunch box est composée à la commande : un curry, un riz parfumé,
            une touche de fraîcheur. Recettes du sud de l'Inde, cuisine de famille.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24}}>
          {[
            ['Biryani poulet',-2],['Dal makhani',1.5],['Curry agneau',-1],['Samoussas',2],
            ['Naan maison',1],['Tandoori',-2],['Riz basmati',1.2],['Chai épicé',-1.5]
          ].map(([n,t],i)=>(
            <Polaroid key={i} label={n} tilt={t}/>
          ))}
        </div>
      </div>

      {/* STORY */}
      <div id="story" style={{background:`linear-gradient(180deg, ${cream}, #F0E2C2)`, padding:'90px 100px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60, alignItems:'center'}}>
          <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{
              width:360, height:440, background:'#fff', padding:14, transform:'rotate(-2.5deg)',
              boxShadow:'0 18px 40px rgba(0,0,0,.18)',
            }}>
              <div style={{
                width:'100%', height:'100%',
                background:'linear-gradient(160deg, #6B3A1F, #2A1A0E)',
                display:'flex', alignItems:'flex-end', justifyContent:'center', padding:'0 0 30px',
                color:gold, fontFamily:'Caveat, cursive', fontSize:42,
              }}>Richard</div>
            </div>
          </div>
          <div>
            <div style={{fontFamily:'Caveat, cursive', fontSize:38, color:orange}}>l'histoire</div>
            <h2 style={{fontFamily:'Fraunces, serif', fontSize:60, fontWeight:600, margin:'0 0 18px', lineHeight:1.05}}>
              « Je cuisine comme à la maison,<br/>tout simplement. »
            </h2>
            <p style={{fontSize:19, lineHeight:1.65, opacity:.85}}>
              Richard Balaraj a grandi avec les odeurs de cardamome, de gingembre frais et de
              ghee qui mijote. Aujourd'hui à Nantes, il transmet cette cuisine qu'il a apprise
              avec sa mère et sa grand-mère, dans des lunch box qu'il prépare chaque jour
              à la commande.
            </p>
            <p style={{fontSize:19, lineHeight:1.65, opacity:.85, marginTop:14}}>
              Légumes bio de la région, viande locale, épices apportées depuis le Tamil Nadu :
              tout passe par ses mains, rien d'industriel.
            </p>
          </div>
        </div>
      </div>

      {/* AVIS */}
      <div style={{padding:'90px 100px'}}>
        <div style={{textAlign:'center', marginBottom:40}}>
          <div style={{fontFamily:'Caveat, cursive', fontSize:38, color:orange}}>ils ont aimé</div>
          <h2 style={{fontFamily:'Fraunces, serif', fontSize:54, fontWeight:600, margin:0}}>Les mots des clients</h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:30}}>
          {[
            {q:'Le meilleur biryani de Nantes, sans hésiter. Richard est adorable en plus.', a:'Sophie · Nantes'},
            {q:"On a commandé pour notre mariage. 80 lunch boxes, tout le monde a adoré.", a:'Karim & Léa'},
            {q:'Le curry végétarien est dingue. Je commande presque tous les vendredis.', a:'Thomas · Doulon'},
          ].map((t,i)=>(
            <div key={i} style={{borderTop:`3px solid ${gold}`, paddingTop:22}}>
              <div style={{color:gold, fontSize:18, marginBottom:6}}>★★★★★</div>
              <p style={{fontFamily:'Fraunces, serif', fontSize:22, lineHeight:1.45, margin:'0 0 18px'}}>« {t.q} »</p>
              <div style={{fontFamily:'Caveat, cursive', fontSize:24, color:orangeDeep}}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{background:ink, color:cream, padding:'90px 100px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60}}>
          <div>
            <div style={{fontFamily:'Caveat, cursive', fontSize:38, color:gold}}>on se voit ?</div>
            <h2 style={{fontFamily:'Fraunces, serif', fontSize:60, fontWeight:600, margin:'0 0 24px', lineHeight:1.05}}>
              Une faim soudaine, un événement à organiser ?
            </h2>
            <p style={{fontSize:19, lineHeight:1.6, opacity:.85, marginBottom:30}}>
              Appelez-moi directement ou écrivez-moi sur WhatsApp.
              Pour les mariages, anniversaires et baptêmes : prévoyez une semaine.
            </p>
            <div style={{display:'flex', flexDirection:'column', gap:14, maxWidth:380}}>
              <a href="tel:0665757718" style={{
                background:orange, color:'#fff', padding:'20px 24px', borderRadius:4,
                textDecoration:'none', fontSize:20, fontWeight:700,
              }}>📞 06 65 75 77 18</a>
              <a href="https://wa.me/33665757718" style={{
                background:'#25D366', color:'#fff', padding:'20px 24px', borderRadius:4,
                textDecoration:'none', fontSize:20, fontWeight:700,
              }}>💬 WhatsApp</a>
            </div>
          </div>
          <div>
            <div style={{fontFamily:'Caveat, cursive', fontSize:32, color:gold, marginBottom:8}}>l'adresse</div>
            <p style={{fontSize:22, lineHeight:1.5, margin:'0 0 22px'}}>
              <strong>The Lunch Box</strong><br/>
              2 rue de la Montagne<br/>
              44100 Nantes
            </p>
            <div style={{
              borderRadius:6, overflow:'hidden', height:280, background:'#3a2618',
              border:`1px solid rgba(217,164,65,.3)`,
            }}>
              <svg viewBox="0 0 400 280" width="100%" height="100%" style={{display:'block'}}>
                <rect width="400" height="280" fill="#3a2618"/>
                <path d="M0 50 L400 40" stroke="#5b3a22" strokeWidth="4"/>
                <path d="M0 130 L400 140" stroke="#5b3a22" strokeWidth="4"/>
                <path d="M0 220 L400 210" stroke="#5b3a22" strokeWidth="4"/>
                <path d="M120 0 L100 280" stroke="#5b3a22" strokeWidth="4"/>
                <path d="M260 0 L280 280" stroke="#5b3a22" strokeWidth="4"/>
                <circle cx="200" cy="140" r="12" fill={orange}/>
                <circle cx="200" cy="140" r="22" fill={orange} opacity=".3"/>
                <text x="200" y="120" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill={gold}>2 rue de la Montagne</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:'#0d0703', color:cream, padding:'30px 100px', textAlign:'center', fontSize:13, opacity:.6}}>
        © The Lunch Box · Nantes
      </div>
    </div>
  );
}

window.V2Illustration = V2Illustration;
