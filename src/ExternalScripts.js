// src/ExternalScripts.js
import { useEffect } from "react"; const ExternalScripts = () => { useEffect(() => { const load = (src) => { const s = document.createElement("script"); s.src = src; s.async = true; document.body.appendChild(s); return s; }; const s1 = load("/js/plugins.js"); const s2 = load("/js/designesia.js");// const s3 = load("/js/custom-marquee.js");
// 
 return () => { [s1, s2].forEach((s) => s && s.remove()); }; }, []); return null; }; export default ExternalScripts;