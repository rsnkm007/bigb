import mobiles from "./categories/mobiles";
import laptops from "./categories/laptops";
import washingMachines from "./categories/washingMachines";
import wearables from "./categories/wearables";
import shoes from "./categories/shoes"
import furniture from "./categories/furniture"
import casuals from "./categories/casuals";
import microOven from "./categories/microOven";
import television from "./categories/television";
import refrigerator from "./categories/fridge";

const products = [

  // ===================== MOBILES =====================

  ...mobiles,

  // ===================== LAPTOPS =====================

  ...laptops, 

  // ===================== CASUALS =====================

  ...casuals,

//============washing machine================

  ...washingMachines,

  // ===================== SHOES =====================

  ...shoes,  

  // ===================== FURNITURE =====================

  ...furniture,

  //===================== WATCHES =====================

  ...wearables, 

  //===================== Micro Oven =====================

  ...microOven,

  ...television,

  ...refrigerator

];

export default products;