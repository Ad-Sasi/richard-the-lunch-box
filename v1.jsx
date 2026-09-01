// Variation A — Fidèle au flyer (orange chaud, écriture manuscrite)
// Direct, chaleureux, presque une affiche numérique.

function V1Flyer(){
  const orange = '#E87A2B';
  const orangeDeep = '#B84A0F';
  const cream = '#FFF4E2';
  const ink = '#2A1A0E';
  const green = '#3A6B2E';

  // Warm radial gradient like the flyer
  const bg = {
    background: `radial-gradient(ellipse at 50% 0%, #FBC36A 0%, ${orange} 38%, ${orangeDeep} 100%)`,
  };

  const Photo = ({label, h=280, tilt=0, sub}) => (
    <div style={{
      width:'100%', height:h, borderRadius:8, overflow:'hidden',
      transform:`rotate(${tilt}deg)`,
      boxShadow:'0 18px 40px rgba(0,0,0,.35), inset 0 0 0 6px #fff, inset 0 0 0 7px rgba(0,0,0,.12)',
      background:`
        repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 14px, rgba(0,0,0,.05) 14px 28px),
        linear-gradient(135deg, #C7421A 0%, #E87A2B 45%, #F3B25A 100%)`,
      display:'flex', alignItems:'flex-end', justifyContent:'center',
      color:'#fff', fontFamily:'Caveat, cursive', fontSize:24, padding:'0 0 14px',
      textShadow:'0 1px 2px rgba(0,0,0,.5)', position:'relative',
    }}>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', opacity:.85}}>
        <div style={{textAlign:'center', fontFamily:'Caveat, cursive', fontSize:64, lineHeight:1, color:'rgba(255,255,255,.85)'}}>{label}</div>
      </div>
      {sub && <span style={{position:'relative', background:'rgba(0,0,0,.35)', padding:'4px 10px', borderRadius:4, fontSize:18}}>{sub}</span>}
    </div>
  );

  const Section = ({children, style}) => (
    <div style={{padding:'80px 100px', ...style}}>{children}</div>
  );

  return (
    <div style={{...bg, color:ink, fontFamily:'DM Sans, system-ui, sans-serif', minHeight:'100%'}}>

      {/* Top nav */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'28px 60px', color:cream, fontWeight:600, letterSpacing:.4}}>
        <span style={{fontFamily:'Caveat, cursive', fontSize:34, color:green, background:cream, padding:'4px 18px', borderRadius:999, boxShadow:'0 4px 12px rgba(0,0,0,.18)'}}>The Lunch Box</span>
        <div style={{display:'flex', gap:32, fontSize:15, textTransform:'uppercase'}}>
          <a href="#story" style={{color:cream, textDecoration:'none'}}>Le restaurant</a>
          <a href="#horaires" style={{color:cream, textDecoration:'none'}}>Horaires</a>
          <a href="#avis" style={{color:cream, textDecoration:'none'}}>Avis</a>
          <a href="#contact" style={{color:cream, textDecoration:'none'}}>Contact</a>
        </div>
        <a href="tel:0665757718" style={{
          background:'#fff', color:orangeDeep, padding:'10px 18px', borderRadius:999,
          textDecoration:'none', fontWeight:700, fontSize:14, boxShadow:'0 6px 14px rgba(0,0,0,.18)'
        }}>📞 06 65 75 77 18</a>
      </div>

      {/* HERO */}
      <Section style={{paddingTop:30, paddingBottom:60, textAlign:'center'}}>
        {/* two food photos at top, like flyer */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, maxWidth:900, margin:'0 auto 30px'}}>
          <Photo label="🍛" sub="Biryani de poulet" tilt={-2} h={240}/>
          <Photo label="🥘" sub="Curry végétarien" tilt={2} h={240}/>
        </div>

        {/* Lunch box illustration as inline SVG */}
        <div style={{display:'flex', justifyContent:'center', margin:'10px 0 6px'}}>
          <svg width="160" height="150" viewBox="0 0 160 150" fill="none">
            <ellipse cx="80" cy="138" rx="55" ry="6" fill="rgba(0,0,0,.25)"/>
            <rect x="32" y="40" width="96" height="84" rx="4" fill="#D9D9D9" stroke="#2a1a0e" strokeWidth="2"/>
            <rect x="32" y="40" width="96" height="22" rx="3" fill="#BFBFBF" stroke="#2a1a0e" strokeWidth="2"/>
            <rect x="32" y="62" width="96" height="22" rx="0" fill="#CFCFCF" stroke="#2a1a0e" strokeWidth="2"/>
            <rect x="32" y="84" width="96" height="22" rx="0" fill="#BFBFBF" stroke="#2a1a0e" strokeWidth="2"/>
            <rect x="32" y="106" width="96" height="18" rx="0" fill="#D9D9D9" stroke="#2a1a0e" strokeWidth="2"/>
            <path d="M40 40 C 40 12, 120 12, 120 40" stroke="#2a1a0e" strokeWidth="3" fill="none"/>
            <circle cx="40" cy="40" r="4" fill="#2a1a0e"/>
            <circle cx="120" cy="40" r="4" fill="#2a1a0e"/>
            <rect x="74" y="14" width="12" height="12" rx="2" fill="#2a1a0e"/>
          </svg>
        </div>

        <h1 style={{
          fontFamily:'Caveat, cursive', fontSize:140, lineHeight:.95, margin:'0 0 4px',
          color:green, fontWeight:700, textShadow:'0 3px 0 rgba(0,0,0,.08)'
        }}>The Lunch Box</h1>

        <div style={{
          fontFamily:'Inter, sans-serif', fontSize:34, fontWeight:800, letterSpacing:'.18em',
          color:ink, margin:'24px 0 10px',
        }}>NOUVEAU À NANTES</div>

        <p style={{fontSize:28, fontWeight:600, margin:'10px 0 4px'}}>Votre lunch box à partir de <span style={{color:orangeDeep}}>8&nbsp;€</span></p>
        <p style={{fontSize:18, margin:'0 0 22px', opacity:.85}}>à venir chercher au<br/>2&nbsp;rue de la Montagne · 44100&nbsp;Nantes</p>

        <p style={{
          fontFamily:'Caveat, cursive', fontSize:44, color:cream, margin:'16px 0 6px',
          textShadow:'0 2px 0 rgba(0,0,0,.18)'
        }}>Je vous propose une cuisine indienne savoureuse</p>
        <p style={{fontStyle:'italic', fontSize:17, opacity:.8}}>végétarienne et non-végétarienne · légumes bio et viande locale</p>

        <a href="tel:0665757718" style={{
          display:'inline-block', marginTop:34,
          background:ink, color:cream, padding:'20px 40px', borderRadius:999,
          textDecoration:'none', fontSize:22, fontWeight:700,
          boxShadow:'0 10px 26px rgba(0,0,0,.3)',
        }}>📞 Commander · 06 65 75 77 18</a>
      </Section>

      {/* HORAIRES band */}
      <div id="horaires" style={{background:cream, color:ink, padding:'70px 100px', borderTop:`6px dashed ${orange}`, borderBottom:`6px dashed ${orange}`}}>
        <h2 style={{fontFamily:'Caveat, cursive', fontSize:72, color:orangeDeep, margin:'0 0 30px', textAlign:'center'}}>Quand venir ?</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:30}}>
          {[
            {day:'Mardi & vendredi', time:'12h → 14h', label:'Lunch box midi'},
            {day:'Jeudi & dimanche', time:'18h → 20h30', label:'Lunch box soir'},
            {day:'Samedi soir', time:'au restaurant', label:'Tikidiniteur · 34 rue Paul Bert'},
          ].map((s,i)=>(
            <div key={i} style={{
              background:'#fff', borderRadius:12, padding:'28px 26px',
              boxShadow:'0 8px 22px rgba(184,74,15,.18)',
              borderTop:`5px solid ${orange}`,
            }}>
              <div style={{fontSize:14, fontWeight:700, color:orange, letterSpacing:.5, textTransform:'uppercase'}}>{s.label}</div>
              <div style={{fontFamily:'Caveat, cursive', fontSize:42, color:ink, margin:'6px 0 2px'}}>{s.day}</div>
              <div style={{fontSize:22, fontWeight:600}}>{s.time}</div>
            </div>
          ))}
        </div>
        <p style={{textAlign:'center', marginTop:30, fontSize:16, opacity:.75}}>Plats à emporter ou à déguster sur place · Livraison à domicile possible sur Nantes à partir de 10 lunch boxes commandées.</p>
      </div>

      {/* STORY */}
      <Section id="story" style={{padding:'80px 100px', color:cream}}>
        <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:50, alignItems:'center'}}>
          <div style={{
            width:320, height:320, borderRadius:'50%',
            background:'linear-gradient(135deg, #5B3320, #2a1a0e)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:cream, fontFamily:'Caveat, cursive', fontSize:120, lineHeight:1,
            boxShadow:'0 18px 40px rgba(0,0,0,.4), inset 0 0 0 8px rgba(255,244,226,.5)',
          }}>R</div>
          <div>
            <div style={{fontFamily:'Caveat, cursive', fontSize:48, color:'#FBC36A', marginBottom:6}}>Bonjour, moi c'est Richard</div>
            <h2 style={{fontFamily:'Fraunces, serif', fontSize:54, lineHeight:1.05, margin:'0 0 16px', fontWeight:600}}>
              Une cuisine indienne <em style={{color:'#FBC36A'}}>faite maison</em>, depuis Nantes.
            </h2>
            <p style={{fontSize:19, lineHeight:1.6, opacity:.92, maxWidth:640}}>
              Je cuisine chaque lunch box à la commande, avec des épices que je choisis moi-même,
              des légumes bio de la région et de la viande locale. Pas de chichi : du goût, du
              parfum, et la générosité d'une vraie cuisine de famille.
            </p>
            <p style={{fontFamily:'Caveat, cursive', fontSize:32, color:'#FBC36A', marginTop:18}}>— Richard (Balaraj)</p>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <div style={{background:cream, padding:'70px 100px'}}>
        <h2 style={{fontFamily:'Caveat, cursive', fontSize:72, color:orangeDeep, margin:'0 0 8px', textAlign:'center'}}>Un avant-goût</h2>
        <p style={{textAlign:'center', color:ink, opacity:.7, marginBottom:34, fontSize:16}}>Quelques plats du moment — la carte change selon les saisons.</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:18}}>
          {['Biryani poulet','Dal makhani','Curry agneau','Samoussas','Naan maison','Tandoori','Riz basmati','Chai épicé'].map((d,i)=>(
            <div key={i}>
              <Photo label={['🍛','🥘','🍗','🥟','🫓','🔥','🍚','☕'][i]} sub={d} tilt={(i%2?1:-1)*1.5} h={200}/>
            </div>
          ))}
        </div>
      </div>

      {/* AVIS */}
      <Section id="avis" style={{color:cream}}>
        <h2 style={{fontFamily:'Caveat, cursive', fontSize:72, color:'#FBC36A', textAlign:'center', margin:'0 0 40px'}}>Ils ont goûté</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24}}>
          {[
            {q:'Le meilleur biryani de Nantes, sans hésiter. Richard est adorable en plus.', a:'Sophie · Nantes centre'},
            {q:'On a commandé pour notre mariage : 80 lunch boxes, tout le monde a adoré.', a:'Karim & Léa'},
            {q:'Le curry végétarien est dingue. Je commande presque tous les vendredis.', a:'Thomas · Doulon'},
          ].map((t,i)=>(
            <div key={i} style={{
              background:'#fff', color:ink, padding:'30px 26px', borderRadius:14,
              boxShadow:'0 12px 30px rgba(0,0,0,.25)', position:'relative',
              transform:`rotate(${(i-1)*0.7}deg)`,
            }}>
              <div style={{fontSize:42, color:orange, lineHeight:.5, fontFamily:'Fraunces, serif'}}>"</div>
              <p style={{fontSize:18, lineHeight:1.55, margin:'4px 0 14px'}}>{t.q}</p>
              <div style={{fontFamily:'Caveat, cursive', fontSize:26, color:orangeDeep}}>{t.a}</div>
              <div style={{color:'#E8A53C', fontSize:18, marginTop:4}}>★★★★★</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT / MAP */}
      <div id="contact" style={{background:cream, color:ink, padding:'70px 100px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:50, alignItems:'stretch'}}>
          <div>
            <h2 style={{fontFamily:'Caveat, cursive', fontSize:72, color:orangeDeep, margin:'0 0 18px'}}>On se voit ?</h2>
            <p style={{fontSize:19, lineHeight:1.6}}>
              <strong>The Lunch Box</strong><br/>
              2 rue de la Montagne, 44100 Nantes
            </p>
            <div style={{display:'flex', flexDirection:'column', gap:14, marginTop:24}}>
              <a href="tel:0665757718" style={{
                background:orangeDeep, color:'#fff', padding:'18px 24px', borderRadius:12,
                textDecoration:'none', fontSize:20, fontWeight:700, display:'flex', alignItems:'center', gap:14
              }}>📞 Appeler · 06 65 75 77 18</a>
              <a href="https://wa.me/33665757718" style={{
                background:'#25D366', color:'#fff', padding:'18px 24px', borderRadius:12,
                textDecoration:'none', fontSize:20, fontWeight:700, display:'flex', alignItems:'center', gap:14
              }}>💬 WhatsApp</a>
              <div style={{
                background:'#fff', padding:'18px 22px', borderRadius:12,
                border:`2px dashed ${orange}`, fontSize:16, lineHeight:1.5
              }}>
                <strong>Événements</strong> — mariages, anniversaires, baptêmes…<br/>
                Contactez-moi, je m'occupe du reste.
              </div>
            </div>
          </div>
          <div style={{
            borderRadius:14, overflow:'hidden',
            background:'linear-gradient(135deg, #f0e3cf, #d8c69f)',
            position:'relative', minHeight:380,
            boxShadow:'0 12px 30px rgba(0,0,0,.18)',
          }}>
            {/* Stylized map */}
            <svg viewBox="0 0 400 380" width="100%" height="100%" style={{display:'block'}}>
              <rect width="400" height="380" fill="#f6ead2"/>
              <path d="M0 80 L400 60" stroke="#d6c08a" strokeWidth="6"/>
              <path d="M0 180 L400 200" stroke="#d6c08a" strokeWidth="6"/>
              <path d="M0 280 L400 290" stroke="#d6c08a" strokeWidth="6"/>
              <path d="M120 0 L100 380" stroke="#d6c08a" strokeWidth="6"/>
              <path d="M260 0 L280 380" stroke="#d6c08a" strokeWidth="6"/>
              <path d="M0 230 Q 200 250 400 220" stroke="#9bbed8" strokeWidth="22" fill="none" opacity=".7"/>
              <circle cx="200" cy="180" r="14" fill={orangeDeep}/>
              <circle cx="200" cy="180" r="28" fill={orangeDeep} opacity=".25"/>
              <text x="200" y="160" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="26" fill={ink}>The Lunch Box</text>
            </svg>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{background:'#1a0e06', color:cream, padding:'40px 100px', textAlign:'center', fontSize:14, opacity:.85}}>
        © The Lunch Box · Nantes · Cuisine indienne maison
      </div>
    </div>
  );
}

window.V1Flyer = V1Flyer;
