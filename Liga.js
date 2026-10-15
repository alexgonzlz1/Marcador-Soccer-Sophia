/* ============================================================
   LIGA ECNL — complemento del admin del marcador.
   Se activa agregando al final de admin.html, antes de </body>:
     <script src="liga.js"></script>
   ============================================================ */
const LIGA_NOMBRE = 'ECNL Girls Southeast \u00b7 GU13';
const LIGA_EQUIPOS = [
  { n: "United Futbol Academy", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/Jonathon_Lake_ce2883d65e694e248155158ad7164fa4_2020%20UFA.png" },
  { n: "GSA", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/kk_kk_93be4e524dee4d938f98de1b01e720ab_GSALogo18D.jpg" },
  { n: "Alabama FC", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/_da463c0400e545cbbfb1f23ee81d0cde_afc.png" },
  { n: "Florida Premier FC", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/New_FP_Cre_08-19-2025T15:04:18.692.png" },
  { n: "Concorde Fire Platinum", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/Concorde-Fire.jpg" },
  { n: "Seminole United", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/Seminole_U_04-29-2026T03:13:59.283.png" },
  { n: "Florida Kraze Krush", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/FKK_NewLog_09-03-2025T12:57:19.223.png" },
  { n: "CESA Liberty", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/CESAShield_06-11-2026T15:27:26.040.jpg" },
  { n: "Atlanta Fire United", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/Lee_Wilder_db1845a2eea8444082a1d8c62031bb81_ATLFire_Un.png" },
  { n: "Athletic Club Florida", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/009a7d67c61243a28dc446bd5ea8d4fe_logopng.png" },
  { n: "Concorde Fire Premier", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/Concorde-Fire.jpg" },
  { n: "South Carolina United", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/Yoshikl_Sako_4009bd6b36b14e96ae900fd4b47b8b6f_SCUFC_TM_s.jpg" },
  { n: "Team Boca", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/_Team_Boca__05132026_040756.PNG" },
  { n: "Sporting SA JAX", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/ClubImages/Logos/SJSA_logo_05-15-2026T16:52:25.216.png" },
  { n: "Tampa Bay United", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/Hugo_Acosta_15ad970dfb1e4ea39726de93b4ff5a6e_tbu_2_star.png" },
  { n: "Jacksonville FC", logo: "https://s3.amazonaws.com/images.totalglobalsports.com/PlayerForm/JOEL_HERNANDEZ_310dd57f9c604f8a9237bbafc95329d7_JFC_Logo.jpg" },
];
window.addEventListener('DOMContentLoaded', ()=>{
  /* ---- Selector de Equipo B: equipos de la liga con escudo ---- */
  const nombreB = $('nombreB');
  if(nombreB){
    const selB = document.createElement('select');
    selB.id = 'selEquipoB';
    selB.style.marginBottom = '8px';
    selB.innerHTML = '<option value="">\u2014 Elegir equipo de la liga \u2014</option>' +
      LIGA_EQUIPOS.map((e,i)=>'<option value="'+i+'">'+e.n+'</option>').join('') +
      '<option value="manual">\u270F\uFE0F Otro equipo (escribir manual)</option>';
    nombreB.insertAdjacentElement('beforebegin', selB);
    selB.onchange = ()=>{
      const v = selB.value;
      if(v === '' || v === 'manual'){
        nombreB.value = ''; nombreB.disabled = false;
        logoBData = ''; $('logoB-prev').style.display = 'none';
        if(v === 'manual') nombreB.focus();
      }else{
        const e = LIGA_EQUIPOS[+v];
        nombreB.value = e.n; nombreB.disabled = true;
        logoBData = e.logo;
        $('logoB-prev').src = e.logo; $('logoB-prev').style.display = 'block';
      }
    };
  }
  /* ---- Tipo de partido: en liga el título es el nombre de la liga ---- */
  const titulo = $('titulo');
  if(titulo){
    const lab = document.createElement('label');
    lab.textContent = 'Tipo de partido';
    lab.style.display = 'block'; lab.style.marginTop = '12px';
    const selT = document.createElement('select');
    selT.id = 'selTipo';
    selT.innerHTML = '<option value="liga">Liga ECNL</option><option value="amistoso">Amistoso</option><option value="otro">Otro / fuera de liga</option>';
    titulo.insertAdjacentElement('beforebegin', selT);
    selT.insertAdjacentElement('beforebegin', lab);
    function aplicarTipo(){
      if(selT.value === 'liga'){ titulo.value = LIGA_NOMBRE; titulo.disabled = true; }
      else{ titulo.disabled = false; if(titulo.value === LIGA_NOMBRE) titulo.value = ''; }
    }
    selT.onchange = aplicarTipo;
    aplicarTipo();
  }
});
