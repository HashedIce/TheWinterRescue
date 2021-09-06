var ores =   ["rankine:magnetite", "kubejs:pyrite" , "kubejs:native_copper", "rankine:malachite", "rankine:pentlandite", "kubejs:native_tin", "rankine:cassiterite", "kubejs:bauxite" , "rankine:stibnite", "rankine:cinnabar", "rankine:magnesite", "rankine:galena", "kubejs:halite" , "rankine:fluorite", "rankine:vanadinite", "kubejs:silver", "kubejs:gold"];
var ore_name =   ["magnetite", "pyrite" , "native_copper", "malachite", "pentlandite", "native_tin", "cassiterite", "bauxite" , "stibnite", "cinnabar", "magnesite", "galena", "halite" , "fluorite", "vanadinite", "silver", "gold"];
var by_products = [];
var i;
var ores_i;
var ore_name_i;
var crushed_ore_i;
var washed_ore_i;
var wash_input;
/*
在by_products数组的对应位置设置副产物
例如:
by_products[1] = [Item.of("minecraft:diamond").withChance(0.5)];
ore_name中的1号位置(第二个元素)是pyrite(黄铁矿)，这行代码将在将粉碎黄铁矿洗为洗净黄铁矿的合成中加入副产物钻石，产出概率为百分之五十。
*/
onEvent('recipes', (event) => {
	for(i=0; i<ores.length; i++){
		ores_i = ores[i];
		ore_name_i = ore_name[i];
		crushed_ore_i = "kubejs:" + "crushed_ore_" + ore_name_i;
		event.recipes.createCrushing([
		crushed_ore_i,
		Item.of(crushed_ore_i).withChance(0.5)
		], ores_i)
	}
	
	for(i=0; i<ore_name.length; i++){
		crushed_ore_i = "kubejs:crushed_ore_" + ore_name[i];
		washed_ore_i = "kubejs:washed_ore_" + ore_name[i];
		if(by_products[i] != undefined){
			wash_input = by_products[i];
			wash_input.unshift(washed_ore_i);
			event.recipes.createSplashing(
			wash_input, crushed_ore_i)
		} 
		else{
			event.recipes.createSplashing(
			[
			washed_ore_i
			], crushed_ore_i)
		}
		
	}
});
