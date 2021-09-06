onEvent('recipes', (event) => {

	let plates = [
		"create:golden_sheet",
		"create:copper_sheet",
		"create:brass_sheet",
		"create:iron_sheet"
	]
	plates.forEach((plate) => {
        event.remove({ type: 'create:pressing', output: plate})
    });
	
	event.recipes.createCompacting('2x steampowered:bronze_sheet','3x rankine:bronze_alloy')
	event.recipes.createCompacting('2x kubejs:battery_alloy_plate','3x kubejs:battery_alloy')
	event.recipes.createCompacting('2x kubejs:cast_iron_plate','3x rankine:cast_iron_alloy')
	let metals = [
		"golden",
		"copper",
		"brass",
		"iron"
	]
	metals.forEach((plate) => {
        event.recipes.createCompacting(`2x create:${plate}_sheet`,`3x #forge:ingots/${plate}`)
    });

    

	let metals2 = [
		"aluminum",
		"lead",
		"constantan"
	]
	metals2.forEach((plate) => {
        event.recipes.createCompacting(`2x immersiveengineering:plate_${plate}`,`3x #forge:ingots/${plate}`)
    });
});