// Movement in the header of the site
// Scroll

let header = document.querySelector('#address');

window.addEventListener ('scroll', function () {
    if (scrollY >= 35) {
      header.style.top = "-73px";
    }
    else {
      header.style.top = "0px";
    }
})


// Products


// Definition of elements
let li = document.querySelectorAll(".classify");
let img = document.querySelectorAll(".picture-project");
let h3_P = document.querySelectorAll(".title-project");
let d_Stars = document.querySelectorAll(".stars");
let d_Star = document.querySelectorAll(".star");
let p_price = document.querySelectorAll(".price");


// Rate the items




// -------------------------------------------------------------------------------

// let li = document.querySelectorAll(".varieties-and-quality");
// let div1 = document.querySelectorAll(".main-title");
// let h2 = document.querySelectorAll(".title-division");
// let a1 = document.querySelectorAll(".a1");
// let span1 = document.querySelectorAll(".img-title");
// let img = document.querySelectorAll(".picture");
// let strong = document.querySelectorAll(".quality-name");
// let span2 = document.querySelectorAll(".show-sections");
// let div2 = document.querySelectorAll(".sub-link-items");
// let h3 = document.querySelectorAll(".sub-link");
// let a2 = document.querySelectorAll(".a2");

// let qualityName = [
//   "لابتوب وكمبيوتر",
//   "الكترونيات",
//   "عقارات للايجار",
//   "ازياء - موضة نسائية",
//   "ازياء - موضة رجالي",
//   "اطفال والعاب",
// ];
// let subLinkItems1 = [
//   "حاسبات",
//   "كمبيوتر",
//   "طابعات و اكسسوارات",
//   "شاشات",
//   "كمبيوتر العاب",
//   "سيرفرات",
// ];
// let subLinkItems2 = [
//   "ثلاجات - فريزر",
//   "غسالات - نشافات",
//   "أفران",
//   "تليفزيون",
//   "مكانس كهربائية",
//   "اككسوارات وقطع غيار",
// ];
// let subLinkItems3 = [
//   "شقق للايجار",
//   "عقارات للإيجار على الخريطة",
//   "تجاري للإيجار",
//   "شقق وأجنحة فندقية",
//   "غرف ومشاركة سكن",
//   "عمارات للايجار",
// ];
// let subLinkItems4 = [
//   "ملابس",
//   "احذية نسائية",
//   "حقائب - شنط",
//   "ساعات",
//   "مستحضرات تجميل",
//   "عطور - بخور",
//   "مستحضرات عناية شخصية",
// ];
// let subLinkItems5 = [
//   "ملابس",
//   "احذية رجالي",
//   "عطور - بخور رجالي",
//   "ساعات",
//   "اكسسوارات رجالي",
//   "أزياء رجالية - اخرى",
//   "عناية شخصية رجالية",
//   "مستحضرات عناية شخصية",
// ];
// let subLinkItems6 = [
//   "اثاث غرف نوم اطفال",
//   "ملابس واحذية للاطفال",
//   "ألعاب اطفال",
//   "مستلزمات اطفال",
// ];

// let dataPro = [];

// function createData() {
//   let newPro = {
//     li: li,
//     div1: div1,
//     h2: h2,
//     a1: a1,
//     span1: span1,
//     img: img,
//     strong: strong,
//     div2: div2,
//     h3: h3,
//     a2: a2,
//   };
//   dataPro.push(newPro);
//   showdata();
// }
// createData();

// function showdata() {
//   let sectionsList = document.querySelector("#sections-list");
//   let List = "";

//   for (i = 0; i < dataPro.length; i++) {
//     List = `<li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/computer.png"
//                                         alt="لابتوب وكمبيوتر"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[0]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[3]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[4]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[5]}</a></h3>
//                 </div>
//             </li>
//             <li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/cpu.png"
//                                         alt="الكترونيات"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[1]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[3]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[4]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[5]}</a></h3>
//                 </div>
//             </li>
//             <li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/house.png"
//                                         alt="عقارات للايجار"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[2]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[3]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[4]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[5]}</a></h3>
//                 </div>
//             </li>
//             <li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/dress.png"
//                                         alt="ازياء - موضة
//                                         نسائية"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[3]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[3]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[4]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[5]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[6]}</a></h3>
//                 </div>
//             </li>
//             <li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/male-clothes.png"
//                                         alt="ازياء - موضة
//                                         رجالي"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[4]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[3]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[4]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[5]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[6]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[7]}</a></h3>
//                 </div>
//             </li>
//             <li class="varieties-and-quality">
//                 <div class="main-title">
//                     <h2 class="title-division">
//                         <a class="a1" href="#">
//                             <span class="img-title">
//                                     <img
//                                         class="picture"
//                                         src="../img/sections/playtime.png"
//                                         alt="اطفال والعاب"
//                                         />
//                                 </span>
//                             <strong class="quality-name">${qualityName[5]}</strong>
//                         </a>
//                     </h2>
//                     <span class="show-sections"> عرض الجميع </span>
//                 </div>
//                 <div id="items1" class="sub-link-items">
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[0]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[1]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[2]}</a></h3>
//                     <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[3]}</a></h3>
//                 </div>
//             </li>`;
//   }
//   sectionsList.innerHTML = List;
// }