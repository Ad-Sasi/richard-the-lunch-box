// Variation C — Motif indien (mandala/blockprint pattern, plus graphique)
// Direction plus moderne et graphique, avec un motif indien en arrière-plan.

function V3Pattern(){
  const orange = '#E87A2B';
  const orangeDeep = '#B84A0F';
  const cream = '#FFF6E2';
  const ink = '#1F0E05';
  const green = '#3F6A2A';
  const gold = '#E8A53C';
  const turquoise = '#1F8A8A';

  // Block-print style SVG pattern (data URI)
  const pattern = `url("data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
      <g fill='none' stroke='${orangeDeep}' stroke-width='1.2' opacity='.18'>
        <circle cx='60' cy='60' r='30'/>
        <circle cx='60' cy='60' r='20'/>
        <circle cx='60' cy='60' r='10'/>
        <path d='M60 10 L65 30 L85 35 L65 40 L60 60 L55 40 L35 35 L55 30 Z'/>
        <path d='M60 110 L65 90 L85 85 L65 80 L60 60 L55 80 L35 85 L55 90 Z'/>
        <path d='M10 60 L30 65 L35 85 L40 65 L60 60 L40 55 L35 35 L30 55 Z'/>
        <path d='M110 60 L90 65 L85 85 L80 65 L60 60 L80 55 L85 35 L90 55 Z'/>
      </g>
    </svg>
  `)}")`;

  return (
    <div style={{background:cream, color:ink, fontFamily:'DM Sans, sans-serif', minHeight:'100%'}}>

      {/* Top bar */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'22px 60px', background:ink, color:cream
      }}>
        <span style={{fontFamily:'Yatra One, cursive', fontSize:28, color:gold, letterSpacing:.5}}>The Lunch Box</span>
        <div style={{display:'flex', gap:34, fontSize:13, fontWeight:600, letterSpacing:.6, textTransform:'uppercase'}}>
          <a href="#cuisine" style={{color:cream, textDecoration:'none'}}>Cuisine</a>
          <a href="#story" style={{color:cream, textDecoration:'none'}}>Richard</a>
          <a href="#horaires" style={{color:cream, textDecoration:'none'}}>Horaires</a>
          <a href="#avis" style={{color:cream, textDecoration:'none'}}>Avis</a>
          <a href="#contact" style={{color:cream, textDecoration:'none'}}>Contact</a>
        </div>
        <a href="tel:0665757718" style={{
          background:orange, color:'#fff', padding:'10px 20px', borderRadius:999,
          textDecoration:'none', fontWeight:700, fontSize:13, letterSpacing:.4
        }}>📞 06 65 75 77 18</a>
      </div>

      {/* HERO with pattern */}
      <div style={{
        position:'relative', padding:'90px 100px 100px',
        background:`${pattern}, linear-gradient(180deg, ${cream} 0%, #F8E5C0 100%)`,
        backgroundSize:'120px 120px, auto',
      }}>
        {/* corner ornaments */}
        <svg style={{position:'absolute', top:30, left:40, opacity:.45}} width="120" height="120" viewBox="0 0 120 120">
          <g fill="none" stroke={orangeDeep} strokeWidth="2">
            <path d="M0 60 Q 60 60 60 0"/>
            <path d="M0 90 Q 90 90 90 0"/>
          </g>
        </svg>
        <svg style={{position:'absolute', top:30, right:40, opacity:.45, transform:'scaleX(-1)'}} width="120" height="120" viewBox="0 0 120 120">
          <g fill="none" stroke={orangeDeep} strokeWidth="2">
            <path d="M0 60 Q 60 60 60 0"/>
            <path d="M0 90 Q 90 90 90 0"/>
          </g>
        </svg>

        <div style={{textAlign:'center', maxWidth:900, margin:'0 auto'}}>
          <div style={{
            display:'inline-block', background:turquoise, color:cream,
            padding:'6px 20px', borderRadius:999, fontSize:12, fontWeight:700,
            letterSpacing:'.18em', textTransform:'uppercase', marginBottom:24,
          }}>★ Nouveau à Nantes ★</div>

          <h1 style={{
            fontFamily:'Yatra One, cursive', fontSize:140, lineHeight:.95,
            margin:'0 0 16px', color:ink,
            textShadow:`3px 3px 0 ${orange}`,
          }}>
            The Lunch Box
          </h1>

          <p style={{
            fontFamily:'Cormorant Garamond, serif', fontSize:36, fontStyle:'italic',
            color:orangeDeep, margin:'10px 0 30px', lineHeight:1.2,
          }}>
            La cuisine indienne de Richard,<br/>livrée dans une vraie lunch box.
          </p>

          {/* Decorative divider */}
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:18, margin:'30px 0'}}>
            <span style={{flex:'0 0 80px', height:1, background:orangeDeep, opacity:.3}}></span>
            <svg width="40" height="20" viewBox="0 0 40 20"><path d="M0 10 L15 10 L20 0 L25 10 L40 10 L25 10 L20 20 L15 10 Z" fill={orangeDeep}/></svg>
            <span style={{flex:'0 0 80px', height:1, background:orangeDeep, opacity:.3}}></span>
          </div>

          <div style={{display:'flex', gap:50, justifyContent:'center', alignItems:'center', flexWrap:'wrap', marginBottom:34}}>
            <div>
              <div style={{fontFamily:'Yatra One, cursive', fontSize:54, color:orangeDeep, lineHeight:1}}>8€</div>
              <div style={{fontSize:13, letterSpacing:.6, textTransform:'uppercase', opacity:.7}}>la lunch box</div>
            </div>
            <div style={{width:1, height:50, background:'rgba(0,0,0,.15)'}}></div>
            <div>
              <div style={{fontFamily:'Yatra One, cursive', fontSize:32, color:ink, lineHeight:1.1}}>2 rue de la Montagne</div>
              <div style={{fontSize:13, letterSpacing:.6, textTransform:'uppercase', opacity:.7}}>44100 Nantes</div>
            </div>
          </div>

          <a href="tel:0665757718" style={{
            display:'inline-block', background:ink, color:cream, padding:'20px 44px',
            textDecoration:'none', fontSize:18, fontWeight:700, letterSpacing:.5,
            borderRadius:4, boxShadow:`6px 6px 0 ${orange}`,
          }}>📞 Commander · 06 65 75 77 18</a>
        </div>
      </div>

      {/* Trio of food cards */}
      <div id="cuisine" style={{padding:'80px 100px'}}>
        <div style={{textAlign:'center', marginBottom:50}}>
          <div style={{fontFamily:'Cormorant Garamond, serif', fontStyle:'italic', fontSize:30, color:orange}}>आ ज की पेशकश</div>
          <h2 style={{fontFamily:'Yatra One, cursive', fontSize:54, margin:'4px 0 8px'}}>La cuisine du jour</h2>
          <p style={{fontSize:17, opacity:.7, maxWidth:560, margin:'0 auto'}}>
            Une carte qui change selon les saisons, toujours végé ou non-végé au choix.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:30}}>
          {[
            {n:'Biryani de poulet', d:'Riz basmati safrané, poulet mariné au yaourt, oignons frits.', tag:'Non-végé', c:orangeDeep},
            {n:'Dal makhani', d:'Lentilles noires mijotées toute la nuit, beurre, crème, kasoori methi.', tag:'Végé', c:green},
            {n:'Curry d’agneau', d:'Agneau local, sauce tomate-cardamome, riz parfumé.', tag:'Non-végé', c:orangeDeep},
          ].map((p,i)=>(
            <div key={i} style={{
              background:'#fff', borderRadius:6, overflow:'hidden',
              boxShadow:'0 12px 30px rgba(31,14,5,.12)',
              border:`1px solid rgba(31,14,5,.06)`,
            }}>
              <div style={{
                height:220,
                background:`${pattern}, linear-gradient(135deg, ${['#C7421A','#3F6A2A','#A33815'][i]}, ${['#E87A2B','#6B9A4E','#C7421A'][i]})`,
                backgroundSize:'80px 80px, auto',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:80,
              }}>{['🍛','🥘','🍗'][i]}</div>
              <div style={{padding:'24px 26px'}}>
                <div style={{
                  display:'inline-block', background:p.c, color:'#fff',
                  padding:'3px 12px', borderRadius:3, fontSize:11, fontWeight:700,
                  letterSpacing:.5, textTransform:'uppercase', marginBottom:10, whiteSpace:'nowrap',
                }}>{p.tag}</div>
                <h3 style={{fontFamily:'Yatra One, cursive', fontSize:28, margin:'0 0 8px'}}>{p.n}</h3>
                <p style={{fontSize:15, lineHeight:1.5, opacity:.75, margin:0}}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HORAIRES — bold band */}
      <div id="horaires" style={{
        background:`${pattern}, linear-gradient(135deg, ${ink}, #3a1d0f)`,
        backgroundSize:'120px 120px, auto',
        color:cream, padding:'70px 100px', textAlign:'center',
      }}>
        <div style={{fontFamily:'Cormorant Garamond, serif', fontStyle:'italic', fontSize:24, color:gold, marginBottom:6}}>quand venir</div>
        <h2 style={{fontFamily:'Yatra One, cursive', fontSize:54, margin:'0 0 40px'}}>Les horaires</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:30, maxWidth:1000, margin:'0 auto'}}>
          {[
            {d:'Mardi · Vendredi', t:'12h → 14h', l:'Midi'},
            {d:'Jeudi · Dimanche', t:'18h → 20h30', l:'Soir'},
            {d:'Samedi', t:'au restaurant', l:'34 rue Paul Bert'},
          ].map((s,i)=>(
            <div key={i} style={{
              border:`1px solid rgba(232,165,60,.4)`, padding:'28px 22px', borderRadius:6,
            }}>
              <div style={{fontSize:12, color:gold, letterSpacing:.7, textTransform:'uppercase'}}>{s.l}</div>
              <div style={{fontFamily:'Yatra One, cursive', fontSize:24, margin:'10px 0 6px'}}>{s.d}</div>
              <div style={{fontFamily:'Cormorant Garamond, serif', fontSize:30, fontStyle:'italic', color:gold}}>{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div style={{padding:'80px 100px'}}>
        <h2 style={{fontFamily:'Yatra One, cursive', fontSize:48, textAlign:'center', margin:'0 0 40px'}}>Galerie</h2>
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gridTemplateRows:'200px 200px', gap:14}}>
          {['🍛','🫓','🥟','🥘','🔥','☕'].map((e,i)=>(
            <div key={i} style={{
              background:`${pattern}, linear-gradient(${i*60}deg, #C7421A, #E87A2B, #F3B25A)`,
              backgroundSize:'80px 80px, auto',
              borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:i===0?100:50,
              gridColumn: i===0 ? 'span 1' : 'auto',
              gridRow: i===0 ? 'span 2' : 'auto',
            }}>{e}</div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <div id="story" style={{
        background:`${pattern}, ${cream}`,
        backgroundSize:'120px 120px, auto',
        padding:'90px 100px',
      }}>
        <div style={{maxWidth:1000, margin:'0 auto', display:'grid', gridTemplateColumns:'280px 1fr', gap:50, alignItems:'center'}}>
          <div style={{
            width:280, height:280, borderRadius:'50%',
            background:`linear-gradient(135deg, #6B3A1F, ${ink})`,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:gold, fontFamily:'Yatra One, cursive', fontSize:90,
            border:`6px double ${gold}`,
          }}>R</div>
          <div>
            <div style={{fontFamily:'Cormorant Garamond, serif', fontStyle:'italic', fontSize:28, color:orange}}>Richard Balaraj</div>
            <h2 style={{fontFamily:'Yatra One, cursive', fontSize:48, margin:'4px 0 18px', lineHeight:1.05}}>
              Cuisinier, passeur d'épices.
            </h2>
            <p style={{fontSize:18, lineHeight:1.65, opacity:.85}}>
              Né dans le sud de l'Inde, installé à Nantes depuis quinze ans, Richard cuisine
              comme on raconte une histoire — avec patience, mémoire, et beaucoup de cardamome.
              Chaque lunch box est une invitation chez lui.
            </p>
          </div>
        </div>
      </div>

      {/* AVIS */}
      <div id="avis" style={{padding:'80px 100px'}}>
        <h2 style={{fontFamily:'Yatra One, cursive', fontSize:48, textAlign:'center', margin:'0 0 40px'}}>Ce qu'ils en disent</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24}}>
          {[
            {q:'Le meilleur biryani de Nantes, sans hésiter.', a:'Sophie · Nantes'},
            {q:'80 lunch boxes pour notre mariage : tout le monde a adoré.', a:'Karim & Léa'},
            {q:'Le curry végé est dingue. Je commande chaque vendredi.', a:'Thomas · Doulon'},
          ].map((t,i)=>(
            <div key={i} style={{
              background:'#fff', padding:'28px 26px', borderRadius:6,
              boxShadow:'0 8px 22px rgba(31,14,5,.08)',
              borderLeft:`4px solid ${orange}`,
            }}>
              <div style={{color:gold, fontSize:18, marginBottom:8}}>★★★★★</div>
              <p style={{fontFamily:'Cormorant Garamond, serif', fontStyle:'italic', fontSize:22, lineHeight:1.45, margin:'0 0 14px'}}>« {t.q} »</p>
              <div style={{fontSize:14, fontWeight:700, color:orangeDeep, letterSpacing:.4}}>— {t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{
        background:`${pattern}, linear-gradient(135deg, ${orange}, ${orangeDeep})`,
        backgroundSize:'120px 120px, auto',
        color:'#fff', padding:'90px 100px',
      }}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center'}}>
          <div>
            <div style={{fontFamily:'Cormorant Garamond, serif', fontStyle:'italic', fontSize:28, opacity:.9}}>contact</div>
            <h2 style={{fontFamily:'Yatra One, cursive', fontSize:64, margin:'4px 0 20px', lineHeight:1}}>On se voit ?</h2>
            <p style={{fontSize:19, lineHeight:1.6, opacity:.95, marginBottom:30}}>
              Une commande, un événement (mariage, anniversaire, baptême) :
              appelez-moi, je m'occupe du reste.
            </p>
            <div style={{display:'flex', flexDirection:'column', gap:14, maxWidth:400}}>
              <a href="tel:0665757718" style={{
                background:'#fff', color:orangeDeep, padding:'20px 26px', borderRadius:4,
                textDecoration:'none', fontSize:20, fontWeight:700, boxShadow:`6px 6px 0 ${ink}`,
              }}>📞 06 65 75 77 18</a>
              <a href="https://wa.me/33665757718" style={{
                background:'#25D366', color:'#fff', padding:'20px 26px', borderRadius:4,
                textDecoration:'none', fontSize:20, fontWeight:700, boxShadow:`6px 6px 0 ${ink}`,
              }}>💬 WhatsApp</a>
            </div>
          </div>
          <div style={{
            background:'rgba(255,255,255,.95)', borderRadius:6, padding:14, color:ink,
            boxShadow:`8px 8px 0 ${ink}`,
          }}>
            <div style={{
              borderRadius:4, overflow:'hidden', height:300,
              background:'#f6ead2',
            }}>
              <svg viewBox="0 0 400 300" width="100%" height="100%" style={{display:'block'}}>
                <rect width="400" height="300" fill="#f6ead2"/>
                <path d="M0 70 L400 60" stroke="#d6c08a" strokeWidth="6"/>
                <path d="M0 160 L400 175" stroke="#d6c08a" strokeWidth="6"/>
                <path d="M0 240 L400 250" stroke="#d6c08a" strokeWidth="6"/>
                <path d="M120 0 L100 300" stroke="#d6c08a" strokeWidth="6"/>
                <path d="M260 0 L280 300" stroke="#d6c08a" strokeWidth="6"/>
                <circle cx="200" cy="160" r="14" fill={orangeDeep}/>
                <circle cx="200" cy="160" r="26" fill={orangeDeep} opacity=".25"/>
                <text x="200" y="138" textAnchor="middle" fontFamily="Yatra One, cursive" fontSize="20" fill={ink}>The Lunch Box</text>
              </svg>
            </div>
            <div style={{padding:'14px 8px 6px', textAlign:'center'}}>
              <div style={{fontFamily:'Yatra One, cursive', fontSize:22}}>2 rue de la Montagne</div>
              <div style={{fontSize:14, opacity:.7}}>44100 Nantes</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:ink, color:cream, padding:'30px 100px', textAlign:'center', fontSize:13, opacity:.7}}>
        © The Lunch Box · Nantes · Cuisine indienne maison
      </div>
    </div>
  );
}

window.V3Pattern = V3Pattern;
