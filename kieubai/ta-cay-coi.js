/* =========================================================
   KIỂU BÀI: TẢ CÂY CỐI (Tiếng Việt 4)
   Muốn thêm cây: thêm một mục vào danh sách DS bên dưới.
   bq   = từ gợi ý khi nhìn bao quát (từ xa)
   parts= từng bộ phận và từ gợi ý
   mua  = sự thay đổi theo mùa, theo thời gian
   ========================================================= */
(function(){
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

const DS = [
 {id:'bang', name:'cây bàng', short:'bàng', label:'Cây bàng', e:'🌳',
  bq:['cao lớn','tán tròn như chiếc ô khổng lồ','che mát cả góc sân','xanh um'],
  parts:[['Gốc, thân',['to bằng hai vòng tay','sần sùi','màu nâu sẫm','rễ nổi lên mặt đất']],
   ['Cành',['mọc ngang thành từng tầng','như những cánh tay dang rộng']],
   ['Lá',['to bằng bàn tay người lớn','xanh bóng','dày và cứng','mùa đông đỏ rực']],
   ['Hoa',['nhỏ li ti','màu trắng ngà','mọc thành chùm']],
   ['Quả',['hình bầu dục','lúc non xanh, chín vàng','nhân bùi bùi']]],
  mua:['mùa xuân nảy lộc non','mùa hè xanh um','mùa đông lá đỏ rồi rụng','trơ cành khẳng khiu']},
 {id:'phuong', name:'cây phượng', short:'phượng', label:'Cây phượng', e:'🌺',
  bq:['cao vút','tán rộng','như chiếc ô đỏ rực vào mùa hè'],
  parts:[['Gốc, thân',['to','xù xì','màu nâu xám']],
   ['Cành',['vươn dài','khẳng khiu','đan vào nhau']],
   ['Lá',['nhỏ li ti','xếp đều hai bên cuống','giống lá me','xanh mát']],
   ['Hoa',['đỏ rực như lửa','nở thành chùm','cánh mỏng','có nhị dài']],
   ['Quả',['dài','dẹt','như lưỡi kiếm','màu nâu đen']]],
  mua:['mùa xuân lá xanh non','mùa hè hoa nở đỏ rực','báo hiệu mùa thi, mùa hè','tiếng ve kêu râm ran']},
 {id:'xoai', name:'cây xoài', short:'xoài', label:'Cây xoài', e:'🥭',
  bq:['cao hơn mái nhà','tán tròn','rậm rạp','xanh thẫm'],
  parts:[['Gốc, thân',['to','vỏ nâu xám','xù xì']],
   ['Cành',['nhiều','chắc khỏe','vươn rộng']],
   ['Lá',['dài','nhọn như mũi mác','lá non màu tím nhạt','lá già xanh thẫm']],
   ['Hoa',['nhỏ','vàng nhạt','mọc thành chùm','thơm thoang thoảng']],
   ['Quả',['hình bầu dục','lúc non xanh, chín vàng ươm','ngọt lịm','thơm lừng']]],
  mua:['mùa xuân ra hoa','mùa hè sai quả','quả chín vàng','chim đến ăn quả']},
 {id:'nhan', name:'cây nhãn', short:'nhãn', label:'Cây nhãn', e:'🌳',
  bq:['tán tròn','rộng','sum suê','xanh thẫm'],
  parts:[['Gốc, thân',['to','xù xì','màu nâu xám','vỏ nứt nẻ']],
   ['Cành',['sum suê','vươn dài','đầy lá']],
   ['Lá',['nhỏ','dài','xanh thẫm','bóng']],
   ['Hoa',['nhỏ li ti','màu vàng nhạt','mọc thành chùm','ong bướm bay đến']],
   ['Quả',['tròn như hòn bi','vỏ nâu','cùi trắng trong','ngọt lịm','hạt đen nhánh']]],
  mua:['mùa xuân ra hoa','mùa hè quả chín','từng chùm quả trĩu cành','ong đến lấy mật']},
 {id:'buoi', name:'cây bưởi', short:'bưởi', label:'Cây bưởi', e:'🍊',
  bq:['không cao lắm','tán tròn','xanh tốt'],
  parts:[['Gốc, thân',['vừa một vòng tay','vỏ nhẵn','màu xám']],
   ['Cành',['có gai nhỏ','vươn ra nhiều phía']],
   ['Lá',['to','xanh bóng','vò ra thấy thơm']],
   ['Hoa',['trắng muốt','cánh dày','thơm ngát']],
   ['Quả',['tròn','to như quả bóng','vỏ xanh, chín vàng','múi mọng nước','ngọt thanh']]],
  mua:['mùa xuân hoa nở','hương thơm khắp vườn','mùa thu quả chín','dịp Trung thu bày mâm cỗ']},
 {id:'chuoi', name:'cây chuối', short:'chuối', label:'Cây chuối', e:'🍌',
  bq:['cao quá đầu người','xanh mướt','mọc thành bụi'],
  parts:[['Gốc, thân',['tròn','nhẵn','do bẹ lá ôm vào nhau','sờ vào mát lạnh']],
   ['Lá',['to','dài','như chiếc quạt khổng lồ','lá non cuộn tròn','lá già bị gió xé tơi']],
   ['Hoa',['bắp chuối đỏ tím','trổ ra từ ngọn','như ngọn đuốc']],
   ['Quả',['mọc thành nải, thành buồng','cong cong','lúc non xanh, chín vàng','ngọt thơm']]],
  mua:['cây con mọc quanh gốc','trổ buồng','lá phe phẩy trong gió']},
 {id:'dua', name:'cây dừa', short:'dừa', label:'Cây dừa', e:'🌴',
  bq:['cao vút','đứng thẳng','như chiếc ô xòe trên trời'],
  parts:[['Gốc, thân',['thẳng','tròn','có nhiều vòng ngấn','màu xám bạc']],
   ['Lá',['dài','như chiếc lược khổng lồ','tàu lá xanh','reo trong gió']],
   ['Hoa',['nhỏ','màu vàng nhạt','mọc thành chùm']],
   ['Quả',['tròn','mọc thành chùm','vỏ xanh','nước ngọt mát','cùi trắng béo']]],
  mua:['quanh năm xanh tốt','tàu lá vẫy gió','chùm quả trĩu nặng']},
 {id:'hoahong', name:'cây hoa hồng', short:'hồng', label:'Hoa hồng', e:'🌹',
  bq:['nhỏ','cao ngang hông em','trồng trong chậu','xanh tốt'],
  parts:[['Gốc, thân',['nhỏ','có nhiều gai nhọn','màu xanh thẫm']],
   ['Cành',['mảnh','nhiều gai']],
   ['Lá',['nhỏ','mép có răng cưa','xanh thẫm','lá non đỏ tía']],
   ['Hoa',['đỏ thắm','cánh mềm như nhung','xếp nhiều lớp','thơm ngát','nụ hồng chúm chím']]],
  mua:['nở quanh năm','sáng sớm đọng sương','ong bướm bay đến']},
 {id:'dao', name:'cây hoa đào', short:'đào', label:'Hoa đào', e:'🌸',
  bq:['không cao lắm','cành khẳng khiu','trồng trong vườn hoặc trong chậu'],
  parts:[['Gốc, thân',['nâu sẫm','xù xì','có u bướu']],
   ['Cành',['khẳng khiu','uốn lượn','màu nâu tím']],
   ['Lá',['nhỏ','dài','xanh non','nhú lên sau hoa']],
   ['Hoa',['hồng phớt','năm cánh','mỏng manh','nụ tròn như hạt đỗ','nở rộ dịp Tết']]],
  mua:['mùa đông rụng hết lá','gần Tết nhú nụ','mùa xuân hoa nở rộ','báo hiệu Tết đến']},
 {id:'hoasua', name:'cây hoa sữa', short:'hoa sữa', label:'Hoa sữa', e:'🌳',
  bq:['cao','tán lá xanh thẫm','tầng tầng lớp lớp'],
  parts:[['Gốc, thân',['to','thẳng','vỏ nâu xám']],
   ['Cành',['mọc thành từng tầng','xòe đều như chiếc ô']],
   ['Lá',['dài','mọc thành vòng','xanh thẫm','mặt dưới nhạt hơn']],
   ['Hoa',['nhỏ li ti','trắng ngà','mọc thành chùm','mùi hương nồng nàn']],
   ['Quả',['dài','mảnh','như sợi dây']]],
  mua:['cuối thu hoa nở','hương thơm khắp phố','mùa đông vẫn xanh']},
];
const CHUNG = {
  bq:['cao','thấp','tán rộng','xanh tốt','sum suê'],
  parts:[['Gốc, thân',['to','nhỏ','sần sùi','nhẵn','màu nâu']],
   ['Cành',['nhiều','vươn dài','khẳng khiu']],
   ['Lá',['to','nhỏ','xanh mướt','xanh thẫm','bóng']],
   ['Hoa',['nhỏ','màu trắng','màu vàng','thơm']],
   ['Quả',['tròn','dài','xanh','chín vàng','ngọt']]],
  mua:['mùa xuân nảy lộc','mùa hè xanh tốt','ra hoa','kết quả']};

const SUB = {'Gốc, thân':'To hay nhỏ? Vỏ cây màu gì, sờ vào thấy thế nào?','Cành':'Cành vươn ra thế nào? Nhiều hay ít?','Lá':'Lá to hay nhỏ, hình gì, màu gì?','Hoa':'Hoa màu gì, mọc thế nào, có thơm không?','Quả':'Quả hình gì, màu gì? Ăn thấy vị thế nào?'};
const NOI = ['ở sân trường','trước cổng trường','trong vườn nhà em','đầu ngõ nhà em','ở công viên','trong chậu ở ban công'];
const AI_TRONG = ['ông nội trồng','bố em trồng','các thầy cô trồng','đã nhiều năm','từ khi em còn nhỏ','từ trước khi em vào trường'];
const LOI = ['cho bóng mát','cho quả ngọt','làm đẹp sân trường','chim đến làm tổ, hót líu lo','chúng em chơi đùa dưới gốc','làm không khí trong lành'];
const KN = ['nhặt lá làm đồ chơi','ngồi đọc sách dưới gốc','hái quả cùng ông','chơi trốn tìm quanh gốc','chụp ảnh cùng các bạn'];
const KET = ['em rất yêu quý','như một người bạn','tưới nước, nhổ cỏ','không bẻ cành, hái lá','mong cây mãi xanh tốt'];

const partFrame = (lb, s) => ({'Gốc, thân':'Gốc cây ','Cành':`Cành ${s} `,'Lá':`Lá ${s} `,'Hoa':`Hoa ${s} `,'Quả':`Quả ${s} `}[lb] || `${lb} `);

(window.KIEUBAI = window.KIEUBAI || []).push({
 id:'ta-cay-coi', ten:'Tả cây cối', e:'🌳',
 moTa:'Tả một cây bóng mát, cây ăn quả hoặc cây hoa em thường gặp.',
 buoc:['Chọn cây','Quan sát, tìm ý','Dàn ý','Viết bài','Chữa bài'],
 doDai:150,

 chon:{
  tieuDe:'Em muốn tả cây nào?',
  moTa:'Em chọn cây mà em đã nhìn thật kỹ: cây ở sân trường, trong vườn nhà, đầu ngõ hay ở công viên. Nếu không có trong danh sách, em chọn "Cây khác" rồi gõ tên.',
  ds:DS, chung:CHUNG,
  khac:{nhan:'Cây khác', e:'🌱', tienTo:'cây ', tenMacDinh:'cây', hoi:'Cây em tả là cây gì?', placeholder:'Ví dụ: cây vải, cây cau, cây hoa mai…',
   tuNguAI:{
    prompt: name => `Học sinh lớp 4 ở Việt Nam chuẩn bị viết bài văn tả ${name}. Hãy gợi ý: 3–4 từ ngữ tả bao quát khi nhìn từ xa; 4–5 bộ phận nên tả (chọn trong: Gốc, thân; Cành; Lá; Hoa; Quả, chỉ chọn bộ phận cây này có và dễ thấy) với mỗi bộ phận 3–5 từ ngữ gợi tả ngắn, đơn giản, đúng thực tế; 3–4 cụm từ về sự thay đổi của cây theo mùa. Chỉ trả lời JSON dạng {"baoquat":["..."],"bophan":[{"ten":"Lá","tu":["...","..."]}],"theomua":["..."]}`,
    apply: (r, U) => { const parts = U.bophan(r?.bophan); return parts.length ? {parts, bq:U.list(r?.baoquat), mua:U.list(r?.theomua)} : null; }
   }}
 },

 goi:(dt) => dt.name,
 nhan:(dt) => dt.name,
 quanSat: c => `Hãy ra ngắm thật kỹ ${c.dt.name} (hoặc xem ảnh) rồi trả lời từng câu hỏi. Nhìn từ xa trước, rồi lại gần nhìn từng bộ phận. Chỉ cần viết vài chữ. Em có thể bấm vào từ gợi ý để thêm vào câu trả lời.`,

 nhom(c){
  const dt = c.dt, n = dt.name;
  return [
   {tag:'Mở bài', title:'Giới thiệu', qs:[
     {key:'noi', label:`${cap(n)} được trồng ở đâu?`, chips:NOI, phan:'mo', ngan:'Ở đâu'},
     {key:'ai', label:'Ai trồng cây? Cây được trồng từ bao giờ?', chips:AI_TRONG, phan:'mo', ngan:'Ai trồng'}]},
   {tag:'Thân bài', title:'Nhìn từ xa', qs:[
     {key:'bq', label:`Nhìn từ xa, ${n} trông thế nào?`, sub:'Cây cao bằng gì? Tán lá giống cái gì?', chips:dt.bq, rows:2, phan:'dang', ngan:'Nhìn từ xa'}]},
   {tag:'Thân bài', title:'Lại gần, nhìn từng bộ phận', qs: dt.parts.map(([lb,ws]) => ({key:'p:'+lb, label:`${lb} của cây trông thế nào?`, sub:SUB[lb] || 'Màu gì, hình gì, trông giống cái gì?', chips:ws, phan:'dang', ngan:lb}))},
   {tag:'Thân bài', title:'Theo mùa, lợi ích, kỉ niệm', qs:[
     {key:'mua', label:'Cây thay đổi thế nào theo mùa?', sub:'Lúc nào cây ra lá non, ra hoa, có quả, rụng lá?', chips:dt.mua, phan:'khac', ngan:'Theo mùa'},
     {key:'loi', label:'Cây có ích lợi gì? Chim chóc, mọi người làm gì bên cây?', chips:LOI, phan:'khac', ngan:'Lợi ích'},
     {key:'kn', label:'Em có kỉ niệm gì với cây?', sub:'Nếu không có, em để trống.', chips:KN, phan:'khac', ngan:'Kỉ niệm'}]},
   {tag:'Kết bài', title:'Tình cảm của em', qs:[
     {key:'ket', label:`Em thấy ${n} thế nào? Em sẽ làm gì để chăm sóc, bảo vệ cây?`, chips:KET, phan:'ket', ngan:'Tình cảm'}]}
  ];
 },
 batBuoc(c){
  const need = [], g = k => (c.ans[k]||'').trim();
  const fp = c.dt.parts.filter(([lb]) => g('p:'+lb)).length;
  if(!g('bq')) need.push('tả cây khi nhìn từ xa');
  if(fp < 3) need.push(`tả ít nhất 3 bộ phận (em mới có ${fp})`);
  if(!g('mua') && !g('loi') && !g('kn')) need.push('trả lời ít nhất một câu về mùa, lợi ích hoặc kỉ niệm');
  return need;
 },

 secs:[
  {k:'mo', title:'Mở bài', dy:'Mở bài', len:'1–2 câu', goal:'Giới thiệu cây em định tả: cây gì, trồng ở đâu, ai trồng, từ bao giờ.',
   frames: c => { const noi = (c.ans.noi||'').split(',')[0].trim();
     return [noi ? `${cap(noi)} có một ${c.dt.name} ` : `Ở sân trường em có một ${c.dt.name} `, `Trong vườn nhà em, em thích nhất là ${c.dt.name} `, `${cap(c.dt.name)} là người bạn thân thiết của `, `Mỗi lần nhìn thấy ${c.dt.name}, em lại nhớ `]; }},
  {k:'dang', title:'Thân bài: tả bao quát và từng bộ phận', dy:'Tả bao quát, rồi tả từng bộ phận', len:'5–8 câu', tall:true, goal:'Tả bao quát trước (cây cao thế nào, tán lá ra sao), rồi lại gần tả từng bộ phận: gốc, thân, cành, lá, hoa, quả.',
   frames: c => [`Nhìn từ xa, ${c.dt.name} trông như `, ...c.dt.parts.map(([lb]) => partFrame(lb, c.dt.short || c.dt.name.replace(/^cây /,''))), 'Đẹp nhất là lúc ']},
  {k:'khac', title:'Thân bài: theo mùa, lợi ích, kỉ niệm', dy:'Sự thay đổi theo mùa, lợi ích, kỉ niệm', len:'3–5 câu', tall:true, goal:'Cây thay đổi thế nào theo mùa? Cây có ích gì? Em có kỉ niệm gì bên cây?',
   frames: c => ['Mùa xuân, ', 'Mùa hè, ', 'Mỗi giờ ra chơi, chúng em ', `${cap(c.dt.name)} cho `, 'Em nhớ nhất lần ']},
  {k:'ket', title:'Kết bài', dy:'Kết bài', len:'1–3 câu', goal:'Nói tình cảm của em với cây, em sẽ làm gì để chăm sóc, bảo vệ cây.',
   frames: c => [`Em rất yêu quý ${c.dt.name} vì `, `Em sẽ chăm sóc ${c.dt.name} bằng cách `, `Mong sao ${c.dt.name} `]}
 ],

 mau:[
  {for:'bang', ten:'cây bàng ở sân trường', doan:{
   mo:'Giữa sân trường em có một cây bàng rất to. Nghe các thầy cô kể, cây được trồng từ khi trường mới xây.',
   dang:'Nhìn từ xa, cây bàng giống như một chiếc ô xanh khổng lồ che mát cả góc sân. Gốc cây to đến mức hai bạn nhỏ ôm mới xuể. Thân cây sần sùi, màu nâu sẫm, có nhiều u bướu. Cành bàng mọc ngang thành từng tầng như những cánh tay dang rộng. Lá bàng to bằng bàn tay người lớn, mặt trên xanh bóng, sờ vào thấy dày và cứng. Hoa bàng nhỏ li ti, màu trắng ngà, mọc thành từng chùm.',
   khac:'Mùa xuân, cây bàng nảy những búp lá non xanh mơn mởn. Mùa hè, tán lá xanh um, chim sẻ về làm tổ, hót ríu rít. Sang đông, lá bàng chuyển sang màu đỏ rực rồi rụng đầy sân. Giờ ra chơi, chúng em thường ngồi dưới gốc bàng đọc truyện và chơi ô ăn quan.',
   ket:'Em rất yêu cây bàng. Cây như một người bạn lớn luôn che chở cho chúng em. Em sẽ cùng các bạn giữ gìn cây, không trèo cây, bẻ cành.'}},
  {for:'xoai', ten:'cây xoài trong vườn nhà', doan:{
   mo:'Trong vườn nhà em có một cây xoài do ông nội trồng từ khi em còn chưa ra đời.',
   dang:'Cây xoài cao hơn mái nhà, tán lá tròn và rậm rạp. Gốc cây to, vỏ màu nâu xám, sờ vào thấy xù xì. Lá xoài dài và nhọn như mũi mác, lá già xanh thẫm, lá non màu tím nhạt. Đến mùa, hoa xoài nở thành từng chùm vàng nhạt, thơm thoang thoảng. Quả xoài lúc non xanh mướt, khi chín vàng ươm, ăn vào ngọt lịm.',
   khac:'Mùa hè là lúc cây xoài sai quả nhất. Những chùm quả lủng lẳng trên cành như những chiếc chuông nhỏ. Chiều nào em cũng cùng ông ra vườn ngắm xoài. Có lần em được ông bế lên để tự tay hái quả đầu tiên.',
   ket:'Em rất quý cây xoài của ông. Mỗi lần ăn quả xoài ngọt, em lại nhớ đến công ông vun trồng. Em sẽ cùng ông tưới nước, bắt sâu cho cây.'}}
 ],

 kiemTra(e, c, U){
  const all = U.all(e), nDang = U.cau(e.dang), nKhac = U.cau(e.khac), ss = U.soSanh(all);
  const bq = /(nhìn từ xa|từ xa|tán|cao)/i.test(e.dang);
  const bp = U.demTu(e.dang, ['gốc','thân','cành','lá','hoa','quả','rễ','nụ','tán']);
  const sense = U.demTu(all, ['thơm','ngát','nồng','sần','xù','nhẵn','ráp','mát','rì','xào','reo','nghe','tiếng','hót','ngọt','chua','bùi']);
  return [
   {ok: nDang>=4, t:'Tả cây ít nhất 4 câu', h:`Em mới có ${nDang} câu. Hãy tả thêm bộ phận khác: gốc, cành, lá, hoa, quả…`},
   {ok: bq && bp>=3, t:'Tả bao quát rồi tả từng bộ phận', h: !bq ? 'Em chưa tả cây khi nhìn từ xa: cây cao thế nào, tán lá ra sao?' : `Em mới nhắc đến ${bp} bộ phận. Hãy tả thêm ít nhất 3 bộ phận của cây.`},
   {ok: nKhac>=2, t:'Có nói về sự thay đổi theo mùa, lợi ích hoặc kỉ niệm', h:`Em mới có ${nKhac} câu. Cây thay đổi thế nào theo mùa? Cây có ích gì cho mọi người?`},
   {ok: ss>=2, t:'Có ít nhất 2 hình ảnh so sánh', h: ss===1 ? 'Em đã có 1 hình ảnh so sánh. Thêm một hình ảnh nữa nhé, ví dụ: "tán lá như …".' : 'Thử dùng từ "như" để so sánh, ví dụ: tán cây như …'},
   {ok: sense>=2, t:'Tả bằng cả mũi, tay và tai, không chỉ bằng mắt', h:'Hoa có thơm không? Sờ vào thân cây thấy thế nào? Lá cây xào xạc ra sao?'},
   {ok: /(yêu|quý|thương|thích|chăm sóc|bảo vệ|người bạn|nhớ|tưới)/i.test(e.ket), t:'Kết bài nói được tình cảm của em', h:'Em yêu quý cây thế nào? Em sẽ làm gì để chăm sóc, bảo vệ cây?'}
  ];
 },

 ai:{
  deBai: c => `bài văn tả cây cối: ${c.dt.name}`,
  tieuChi:['Bố cục đủ 3 phần','Tả bao quát và từng bộ phận','Sự thay đổi theo mùa, lợi ích, kỉ niệm','Từ ngữ hay, hình ảnh so sánh','Câu và chính tả','Tình cảm của em'],
  viDu:'Lá cây to hay nhỏ, sờ vào thấy thế nào?'
 }
});
})();
