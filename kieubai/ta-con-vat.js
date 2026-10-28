/* =========================================================
   KIỂU BÀI: TẢ CON VẬT (Tiếng Việt 4)
   Muốn thêm con vật: thêm một dòng vào danh sách DS bên dưới.
   ========================================================= */
(function(){
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

const DS = [
 {id:'meo',name:'con mèo',label:'Mèo',e:'🐱',parts:[
  ['Tầm vóc',['to bằng cái phích nước','nhỏ xíu','tròn trịa','bụ bẫm']],
  ['Bộ lông',['vàng mướp','tam thể','trắng muốt','đen tuyền','mượt như nhung','mềm như bông']],
  ['Cái đầu',['tròn như quả bóng nhỏ','nhỏ nhắn']],
  ['Đôi mắt',['tròn xoe','long lanh như hòn bi ve','xanh biếc','ban đêm sáng quắc']],
  ['Đôi tai',['nhỏ xíu','hình tam giác','vểnh lên nghe ngóng']],
  ['Bộ ria',['trắng','cứng như sợi cước','vểnh lên']],
  ['Bốn chân',['ngắn','có móng vuốt sắc','đệm thịt êm','bước đi nhẹ nhàng']],
  ['Cái đuôi',['dài','thướt tha','ngoe nguẩy','cong lên']]],
  hoat:['rình chuột','nằm sưởi nắng','liếm lông','vờn cuộn len','kêu meo meo','rón rén','vồ thật nhanh','dụi đầu vào chân em']},
 {id:'cho',name:'con chó',label:'Chó',e:'🐶',parts:[
  ['Tầm vóc',['to','khỏe mạnh','nhỏ nhắn','bụ bẫm']],
  ['Bộ lông',['vàng','đen tuyền','đốm trắng đen','mượt','dày']],
  ['Cái đầu',['to','tròn','nhỏ nhắn']],
  ['Đôi mắt',['đen láy','tròn xoe','tinh nhanh','hiền lành']],
  ['Đôi tai',['to','cụp xuống','vểnh lên','dựng đứng']],
  ['Cái mõm',['dài','ươn ướt','đen bóng','thính hơi']],
  ['Bốn chân',['chắc khỏe','chạy nhanh thoăn thoắt']],
  ['Cái đuôi',['cong như cái móc','ngoáy tít','vẫy rối rít']]],
  hoat:['canh nhà','sủa gâu gâu','chạy ra đón em','quấn quýt bên chân','đánh hơi','gặm xương','nằm ngủ trước cửa']},
 {id:'gatrong',name:'con gà trống',label:'Gà trống',e:'🐓',parts:[
  ['Tầm vóc',['cao lớn','oai vệ','to khỏe']],
  ['Bộ lông',['óng mượt','nhiều màu','đỏ tía','xanh biếc','vàng óng']],
  ['Cái mào',['đỏ chót','đỏ rực như lửa','to như bông hoa','hình răng cưa']],
  ['Đôi mắt',['tròn','đen nhánh','như hạt tiêu']],
  ['Cái mỏ',['vàng','nhọn','cứng']],
  ['Đôi chân',['cao','vàng','có cựa nhọn']],
  ['Cái đuôi',['cong vồng','dài','nhiều màu','như cầu vồng']]],
  hoat:['gáy ò ó o','vỗ cánh phành phạch','bới đất tìm giun','dẫn đàn gà','đi lại oai vệ','vươn cổ']},
 {id:'gamai',name:'con gà mái',label:'Gà mái',e:'🐔',parts:[
  ['Tầm vóc',['tròn trịa','vừa vừa','béo']],
  ['Bộ lông',['vàng nâu','mượt','xù lên khi có người lạ']],
  ['Cái mào',['nhỏ','đỏ hồng']],
  ['Đôi mắt',['tròn','tinh']],
  ['Cái mỏ',['vàng','ngắn','nhọn']],
  ['Đôi chân',['vàng','có móng','bới đất']]],
  hoat:['cục tác','ấp trứng','dẫn đàn con','xòe cánh che con','bới đất tìm mồi','gọi con tục tục']},
 {id:'vit',name:'con vịt',label:'Vịt',e:'🦆',parts:[
  ['Tầm vóc',['nhỏ','tròn','béo núc']],
  ['Bộ lông',['trắng muốt','xám','mượt','không thấm nước']],
  ['Cái đầu',['nhỏ','tròn']],
  ['Cái mỏ',['dẹt','vàng','to bản']],
  ['Đôi mắt',['đen','tròn']],
  ['Đôi chân',['ngắn','có màng','như mái chèo']],
  ['Cái đuôi',['ngắn','cong']]],
  hoat:['bơi lội','lặn ngụp','kêu cạc cạc','đi lạch bạch','rỉa lông','mò tép']},
 {id:'tho',name:'con thỏ',label:'Thỏ',e:'🐰',parts:[
  ['Tầm vóc',['nhỏ','tròn như cục bông','bụ bẫm']],
  ['Bộ lông',['trắng như bông','xám','mềm mượt']],
  ['Đôi tai',['dài','dựng đứng','hồng hồng']],
  ['Đôi mắt',['đỏ hồng','tròn','như hạt ngọc']],
  ['Cái mũi',['hồng','luôn động đậy']],
  ['Bộ ria',['dài','trắng']],
  ['Bốn chân',['chân sau dài','nhảy xa']],
  ['Cái đuôi',['ngắn','như cục bông']]],
  hoat:['gặm cà rốt','nhảy tung tăng','dụi mũi','dỏng tai nghe ngóng','ăn rau']},
 {id:'trau',name:'con trâu',label:'Trâu',e:'🐃',parts:[
  ['Tầm vóc',['to lớn','khỏe mạnh','vạm vỡ']],
  ['Bộ lông',['đen bóng','thưa','cứng']],
  ['Cặp sừng',['cong','như hai lưỡi liềm','nhọn']],
  ['Đôi mắt',['to','hiền lành','đen láy']],
  ['Đôi tai',['to','phe phẩy']],
  ['Bốn chân',['to','chắc khỏe','như cột nhà']],
  ['Cái đuôi',['dài','quất qua quất lại']]],
  hoat:['cày ruộng','gặm cỏ','đầm mình dưới ao','nhai lại','kéo xe','thong thả bước']},
 {id:'lon',name:'con lợn',label:'Lợn',e:'🐷',parts:[
  ['Tầm vóc',['tròn trùng trục','béo','múp míp']],
  ['Bộ lông',['trắng hồng','đen','thưa']],
  ['Cái mõm',['dài','có hai lỗ mũi','hay ủi đất']],
  ['Đôi tai',['to','như cái quạt','cụp']],
  ['Đôi mắt',['nhỏ','híp']],
  ['Bốn chân',['ngắn','có móng']],
  ['Cái đuôi',['ngắn','xoăn tít']]],
  hoat:['ăn ngấu nghiến','kêu ụt ịt','ủi đất','nằm ngủ','đòi ăn eng éc']},
 {id:'ca',name:'con cá vàng',label:'Cá vàng',e:'🐠',parts:[
  ['Thân hình',['nhỏ','bầu bĩnh','thon']],
  ['Lớp vảy',['vàng óng','lấp lánh','đỏ cam']],
  ['Đôi mắt',['tròn','lồi','như hai hạt cườm']],
  ['Cái miệng',['nhỏ','đớp đớp']],
  ['Vây',['mỏng','như dải lụa']],
  ['Cái đuôi',['xòe như cánh quạt','mềm mại','ve vẩy']]],
  hoat:['bơi lượn','đớp mồi','đớp bong bóng','luồn qua rong','đuổi nhau']},
];
const CHUNG = {parts:[
  ['Tầm vóc',['to','nhỏ nhắn','tròn trịa']],
  ['Bộ lông (hoặc da, vảy)',['mượt','mềm','óng ánh','sần sùi','trơn bóng']],
  ['Cái đầu',['tròn','nhỏ','to']],
  ['Đôi mắt',['tròn xoe','đen láy','long lanh','tinh nhanh']],
  ['Miệng (mỏ, mõm)',['nhọn','dài','nhỏ xíu']],
  ['Chân',['ngắn','dài','chắc khỏe','nhanh nhẹn']],
  ['Đuôi',['dài','ngắn','ngoe nguẩy']]],
  hoat:['ăn','ngủ','chạy nhảy','kêu','chơi đùa','tìm mồi']};

const QMAP = {
 'Tầm vóc':'{T} to hay nhỏ? To bằng vật gì em biết?',
 'Thân hình':'Thân hình {t} to hay nhỏ, tròn hay thon?',
 'Bộ lông':'Bộ lông màu gì? Sờ vào em thấy thế nào?',
 'Đôi mắt':'Đôi mắt màu gì, hình gì? Trông giống cái gì?',
 'Cái đuôi':'Cái đuôi dài hay ngắn? {T} hay làm gì với cái đuôi?'
};
const NGUON = ['bà ngoại cho','bố mẹ mua ở chợ','nhà hàng xóm cho','từ khi còn bé xíu','dịp Tết năm ngoái','nuôi đã lâu'];
const TQ = ['chạy ra đón em','quấn quýt bên em','nằm im cho em vuốt ve','kêu lên mừng rỡ','theo em khắp nhà'];
const KET = ['em rất yêu quý','như một người bạn','em sẽ chăm sóc thật tốt','cho ăn đầy đủ','em không bao giờ quên'];

(window.KIEUBAI = window.KIEUBAI || []).push({
 id:'ta-con-vat', ten:'Tả con vật', e:'🐱',
 moTa:'Tả một con vật nuôi hoặc con vật em đã quan sát kỹ.',
 buoc:['Chọn con vật','Quan sát, tìm ý','Dàn ý','Viết bài','Chữa bài'],
 doDai:150,

 chon:{
  tieuDe:'Em muốn tả con vật nào?',
  moTa:'Mỗi bạn chọn con vật mà em biết rõ nhất: con vật nhà em, nhà ông bà, hay con em đã nhìn thật kỹ. Nếu không có trong danh sách, em chọn "Con vật khác" rồi gõ tên.',
  ds:DS, chung:CHUNG,
  khac:{nhan:'Con vật khác', e:'🐾', tienTo:'con ', tenMacDinh:'con vật', hoi:'Con vật em tả là con gì?', placeholder:'Ví dụ: con chim sáo, con rùa, con bò…',
   tuNguAI:{
    prompt: name => `Học sinh lớp 4 ở Việt Nam chuẩn bị viết bài văn tả ${name}. Hãy liệt kê 5–7 bộ phận nên tả (theo thứ tự: tầm vóc, bao quát trước, rồi từng bộ phận) và với mỗi bộ phận 3–5 từ ngữ gợi tả ngắn, đơn giản, đúng thực tế. Thêm 5–7 hoạt động, thói quen ngắn của con vật này. Chỉ trả lời JSON dạng {"bophan":[{"ten":"Bộ lông","tu":["...","..."]}],"hoatdong":["..."]}`,
    apply: (r, U) => { const parts = U.bophan(r?.bophan); return parts.length ? {parts, hoat:U.list(r?.hoatdong)} : null; }
   }}
 },

 goi:(dt, ans) => (ans.ten||'').trim() || 'nó',
 nhan:(dt, ans) => dt.name + ((ans.ten||'').trim() ? ' – ' + ans.ten.trim() : ''),
 quanSat: c => `Hãy nhìn thật kỹ ${c.dt.name} (hoặc ảnh của nó) rồi trả lời từng câu hỏi. Chỉ cần viết vài chữ. Em có thể bấm vào từ gợi ý để thêm vào câu trả lời.`,

 nhom(c){
  const dt = c.dt, t = c.ten(), T = c.Ten();
  const fill = s => s.replaceAll('{T}', T).replaceAll('{t}', t);
  return [
   {tag:'Mở bài', title:'Giới thiệu', qs:[
     {key:'ten', input:true, rerender:true, label:`Em gọi ${dt.name} là gì?`, sub:'Nếu không có tên, em để trống.', placeholder:'Ví dụ: Mi Mi, Lu Lu, Bông…', phan:'mo', ngan:'Tên'},
     {key:'mo_nguon', label:`Em có ${t} từ bao giờ? Ai cho, hay mua ở đâu?`, chips:NGUON, phan:'mo', ngan:'Có từ'}]},
   {tag:'Thân bài', title:'Hình dáng', qs: dt.parts.map(([lb,ws]) => ({key:'p:'+lb, label: fill(QMAP[lb] || `${lb} của {t} trông thế nào?`), sub: QMAP[lb] ? lb : 'Màu gì, to hay nhỏ, trông giống cái gì?', chips:ws, phan:'dang', ngan:lb}))},
   {tag:'Thân bài', title:'Hoạt động, thói quen', qs:[
     {key:'hd', label:`${T} thường làm gì?`, sub:'Khi ăn, khi ngủ, khi chơi. Tiếng kêu thế nào?', chips:dt.hoat, rows:2, phan:'hoat', ngan:'Hoạt động'},
     {key:'tq', label:`Khi em đi học về hoặc khi em chơi với ${t}, ${t} làm gì?`, chips:TQ, phan:'hoat', ngan:'Khi gặp em'}]},
   {tag:'Kết bài', title:'Tình cảm của em', qs:[
     {key:'ket', label:`Em thấy ${t} thế nào? Em sẽ chăm sóc ${t} ra sao?`, chips:KET, phan:'ket', ngan:'Tình cảm'}]}
  ];
 },
 batBuoc(c, U){
  const need = [], fp = c.dt.parts.filter(([lb]) => (c.ans['p:'+lb]||'').trim()).length;
  if(fp < 3) need.push(`tả ít nhất 3 bộ phận (em mới có ${fp})`);
  if(!(c.ans.hd||'').trim()) need.push('trả lời câu hỏi về hoạt động');
  return need;
 },

 secs:[
  {k:'mo', title:'Mở bài', dy:'Mở bài', len:'1–2 câu', goal:'Giới thiệu con vật em định tả: con gì, tên gì, của ai, có từ bao giờ.',
   frames: c => [`Nhà em có nuôi một ${c.dt.name.replace(/^con /,'chú ')}${(c.ans.ten||'').trim()?` tên là ${c.ans.ten.trim()}`:''}. `, 'Trong các con vật nuôi, em thích nhất là ', `${cap(c.dt.name)} là món quà mà `, 'Em rất thích các con vật. Nhưng em yêu nhất là ']},
  {k:'dang', title:'Thân bài: tả hình dáng', dy:'Tả hình dáng', len:'5–8 câu', tall:true, goal:'Tả bao quát trước (to hay nhỏ, bộ lông), rồi tả từng bộ phận: đầu, mắt, tai, chân, đuôi.',
   frames: c => [`${c.Ten()} to bằng `, ...c.dt.parts.filter(([lb]) => (c.ans['p:'+lb]||'').trim()).slice(0,5).map(([lb]) => `${lb} của ${c.ten()} `), 'Nổi bật nhất là ', `Trông ${c.ten()} giống như `]},
  {k:'hoat', title:'Thân bài: tả hoạt động, thói quen', dy:'Tả hoạt động, thói quen', len:'3–5 câu', tall:true, goal:'Con vật thường làm gì? Ăn, ngủ, chơi, kêu thế nào? Nó làm gì khi gặp em?',
   frames: c => [`Mỗi buổi sáng, ${c.ten()} `, `Mỗi khi em đi học về, ${c.ten()} `, 'Đặc biệt nhất là lúc ', `Thỉnh thoảng, ${c.ten()} `]},
  {k:'ket', title:'Kết bài', dy:'Kết bài', len:'1–3 câu', goal:'Nói tình cảm của em với con vật, em sẽ chăm sóc nó thế nào.',
   frames: c => [`Em rất yêu quý ${c.ten()} vì `, `Em sẽ chăm sóc ${c.ten()} bằng cách `, `${c.Ten()} như một người bạn `]}
 ],

 mau:[
  {for:'meo', ten:'con mèo Mi Mi', doan:{
   mo:'Nhà em có nuôi một chú mèo tam thể tên là Mi Mi. Chú được bà ngoại cho em từ dịp Tết năm ngoái.',
   dang:'Mi Mi to bằng cái phích nước. Bộ lông của chú có ba màu trắng, vàng, đen, sờ vào mềm như nhung. Cái đầu tròn, đôi tai nhỏ hình tam giác lúc nào cũng vểnh lên nghe ngóng. Đôi mắt chú trong veo như hai hòn bi ve, ban đêm sáng quắc. Bộ ria trắng, cứng như sợi cước. Dưới bàn chân có lớp đệm thịt êm nên chú bước đi nhẹ nhàng không một tiếng động.',
   hoat:'Ban ngày, Mi Mi thích nằm sưởi nắng ở bậc thềm. Đến tối, chú rón rén đi rình chuột. Hễ thấy bóng chuột, chú nằm im, rồi bất ngờ vồ một cái thật nhanh. Mỗi khi em đi học về, Mi Mi lại chạy ra dụi đầu vào chân em, kêu "meo meo" như chào đón.',
   ket:'Em rất yêu quý Mi Mi. Chú vừa là người bạn nhỏ, vừa giúp nhà em đuổi lũ chuột. Em sẽ chăm sóc chú thật chu đáo.'}},
  {for:'gatrong', ten:'chú gà trống Chiến Binh', doan:{
   mo:'Trong đàn gà nhà bà nội, em thích nhất chú gà trống tên là Chiến Binh.',
   dang:'Chú gà trống cao lớn, dáng đi oai vệ. Bộ lông óng mượt pha nhiều màu đỏ tía, vàng óng và xanh biếc. Cái mào đỏ chót như một bông hoa lửa trên đầu. Đôi mắt tròn, đen nhánh như hạt tiêu. Cái mỏ vàng, nhọn và cứng. Đôi chân cao, có cựa nhọn hoắt. Cái đuôi cong vồng lên như chiếc cầu vồng nhỏ.',
   hoat:'Sáng nào chú cũng dậy sớm, nhảy lên đống rơm, vỗ cánh phành phạch rồi vươn cổ gáy "ò ó o" thật to. Ban ngày, chú dẫn đàn gà đi kiếm ăn. Thấy con giun nào, chú lại gọi cả đàn tới.',
   ket:'Em rất thích chú gà trống. Tiếng gáy của chú như chiếc đồng hồ báo thức, đánh thức cả xóm mỗi sáng.'}}
 ],

 kiemTra(e, c, U){
  const all = U.all(e), nDang = U.cau(e.dang), nHoat = U.cau(e.hoat), ss = U.soSanh(all);
  const sense = U.demTu(all, ['nghe','tiếng','kêu','sờ','mềm','mượt','ấm','ngửi','thơm','êm','nhám','ráp']);
  return [
   {ok: nDang>=4, t:'Tả hình dáng ít nhất 4 câu', h:`Em mới có ${nDang} câu. Hãy tả thêm bộ phận khác: mắt, tai, chân, đuôi…`},
   {ok: nHoat>=3, t:'Tả hoạt động ít nhất 3 câu', h:`Em mới có ${nHoat} câu. ${c.Ten()} thường làm gì khi ăn, khi chơi, khi gặp em?`},
   {ok: ss>=2, t:'Có ít nhất 2 hình ảnh so sánh', h: ss===1 ? 'Em đã có 1 hình ảnh so sánh. Thêm một hình ảnh nữa nhé, ví dụ: "… như …".' : 'Thử dùng từ "như" để so sánh, ví dụ: đôi mắt tròn như …'},
   {ok: sense>=2, t:'Tả bằng cả tai và tay, không chỉ bằng mắt', h:'Em nghe thấy tiếng kêu thế nào? Sờ vào bộ lông thấy ra sao?'},
   {ok: /(yêu|quý|thương|thích|chăm sóc|người bạn|nhớ)/i.test(e.ket), t:'Kết bài nói được tình cảm của em', h:'Em yêu quý con vật thế nào? Em sẽ làm gì cho nó?'}
  ];
 },

 ai:{
  deBai: c => `bài văn tả con vật: ${c.dt.name}${(c.ans.ten||'').trim()?`, tên là ${c.ans.ten.trim()}`:''}`,
  tieuChi:['Bố cục đủ 3 phần','Tả hình dáng','Tả hoạt động, thói quen','Từ ngữ hay, hình ảnh so sánh','Câu và chính tả','Tình cảm của em'],
  viDu:'Bộ lông của nó sờ vào thấy thế nào?'
 }
});
})();
