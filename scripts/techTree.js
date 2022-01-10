const CAitems = require("content/items");
const CAunits = require("content/units");
const crafting = require("content/blocks/crafting");
const defense = require("content/blocks/defense");
const effect = require("content/blocks/effect");
const distribution = require("content/blocks/distribution");
const liquid = require("content/blocks/liquid");
const power = require("content/blocks/power");
const production = require("content/blocks/production");
const turrets = require("content/blocks/turrets");
const units = require("content/blocks/units");

// Items
const iceNode = new TechTree.TechNode(TechTree.get(Liquids.water), CAitems.ice, ItemStack.with());
const odiumNode = new TechTree.TechNode(TechTree.get(Items.metaglass), CAitems.odium, ItemStack.with());
const refinedOdiumNode = new TechTree.TechNode(TechTree.get(CAitems.odium), CAitems.refinedOdium, ItemStack.with());
const detonatiteNode = new TechTree.TechNode(TechTree.get(Items.blastCompound), CAitems.detonatite, ItemStack.with());
const adamantiteNode = new TechTree.TechNode(TechTree.get(Items.surgeAlloy), CAitems.adamantite, ItemStack.with());
const cryogenicFluidNode = new TechTree.TechNode(TechTree.get(Liquids.cryofluid), CAitems.cryogenicFluid, ItemStack.with());
const scaleNode = new TechTree.TechNode(TechTree.get(Liquids.oil), CAitems.scale, ItemStack.with());

// Units
const adamantiteFactory = new TechTree.TechNode(TechTree.get(Blocks.airFactory), units.adamantiteFactory, units.adamantiteFactory.researchRequirements());
const adamantiteReconstructorT2 = new TechTree.TechNode(TechTree.get(units.adamantiteFactory), units.adamantiteReconstructorT2, units.adamantiteReconstructorT2.researchRequirements());
const adamantiteReconstructorT3 = new TechTree.TechNode(TechTree.get(units.adamantiteReconstructorT2), units.adamantiteReconstructorT3, units.adamantiteReconstructorT3.researchRequirements());
const adamantiteReconstructorT4 = new TechTree.TechNode(TechTree.get(units.adamantiteReconstructorT3), units.adamantiteReconstructorT4, units.adamantiteReconstructorT4.researchRequirements());
const adamantiteReconstructorT5 = new TechTree.TechNode(TechTree.get(units.adamantiteReconstructorT4), units.adamantiteReconstructorT5, units.adamantiteReconstructorT5.researchRequirements());
// Magine requirements edited
const magineNode = new TechTree.TechNode(TechTree.get(UnitTypes.mono), CAunits.magine, ItemStack.with(Items.titanium, 2000, Items.silicon, 1000));
const rivarianNode = new TechTree.TechNode(TechTree.get(CAunits.magine), CAunits.rivarian, ItemStack.with(Items.titanium, 4000, Items.silicon, 2000));
const antariNode = new TechTree.TechNode(TechTree.get(CAunits.rivarian), CAunits.antari, ItemStack.with(Items.titanium, 6000, Items.silicon, 2500, Items.copper, 2500));
const excavationNode = new TechTree.TechNode(TechTree.get(CAunits.antari), CAunits.excavation, ItemStack.with(Items.titanium, 8000, Items.silicon, 5000, Items.copper, 5000, Items.lead, 6000));
const monarchNode = new TechTree.TechNode(TechTree.get(CAunits.excavation), CAunits.monarch, ItemStack.with(Items.titanium, 10000, Items.silicon, 10000, Items.copper, 10000, Items.lead, 10000));

const dalishNode = new TechTree.TechNode(TechTree.get(UnitTypes.dagger), CAunits.dalish, ItemStack.with(Items.copper, 2000, Items.silicon, 1000));
const marginatorNode = new TechTree.TechNode(TechTree.get(CAunits.dalish), CAunits.marginator, ItemStack.with(Items.copper, 2600, Items.silicon, 2000, Items.graphite, 1000));
const relametionNode = new TechTree.TechNode(TechTree.get(CAunits.marginator), CAunits.relametion, ItemStack.with(Items.copper, 2800, Items.lead, 2000, Items.titanium, 1500, Items.silicon, 2400, Items.graphite, 1500));
const arcasterNode = new TechTree.TechNode(TechTree.get(CAunits.relametion), CAunits.arcaster, ItemStack.with(Items.copper, 3000, Items.lead, 2500, Items.plastanium, 2000, Items.silicon, 2800, Items.graphite, 2000));
const titanNode = new TechTree.TechNode(TechTree.get(CAunits.arcaster), CAunits.titan, ItemStack.with(Items.copper, 3000, Items.thorium, 2500, Items.surgeAlloy, 1000, Items.silicon, 2800, Items.graphite, 2000));

const firebursterNode = new TechTree.TechNode(TechTree.get(UnitTypes.flare), CAunits.fireburster, ItemStack.with(Items.copper, 2000, Items.silicon, 1000, Items.coal, 100));
const silocrafterNode = new TechTree.TechNode(TechTree.get(CAunits.fireburster), CAunits.silocrafter, ItemStack.with(Items.copper, 4000, Items.silicon, 2000, Items.graphite, 800));
const incineratorNode = new TechTree.TechNode(TechTree.get(CAunits.silocrafter), CAunits.incinerator, ItemStack.with(Items.copper, 6000, Items.silicon, 3000, Items.graphite, 1200));
const ignitionNode = new TechTree.TechNode(TechTree.get(CAunits.incinerator), CAunits.ignition, ItemStack.with(Items.copper, 8000, Items.silicon, 4000, Items.graphite, 2000, CAitems.detonatite, 100));
const infernoNode = new TechTree.TechNode(TechTree.get(CAunits.ignition), CAunits.inferno, ItemStack.with(Items.copper, 10000, Items.silicon, 5000, Items.graphite, 3500, CAitems.detonatite, 250));

const officerNode = new TechTree.TechNode(TechTree.get(UnitTypes.crawler/*maybe change to nova*/), CAunits.officer, ItemStack.with(Items.copper, 2000, Items.silicon, 1000, CAitems.odium, 200));
const chiefNode = new TechTree.TechNode(TechTree.get(CAunits.officer), CAunits.chief, ItemStack.with(Items.copper, 3000, Items.silicon, 1500, CAitems.odium, 500));
const managerNode = new TechTree.TechNode(TechTree.get(CAunits.chief), CAunits.manager, ItemStack.with(Items.copper, 4000, Items.lead, 2000, Items.silicon, 1800, CAitems.odium, 650));
const directorNode = new TechTree.TechNode(TechTree.get(CAunits.manager), CAunits.director, ItemStack.with(Items.copper, 5000, Items.lead, 4000, Items.silicon, 2400, Items.graphite, 1600, CAitems.odium, 650));
const leaderNode = new TechTree.TechNode(TechTree.get(CAunits.director), CAunits.leader, ItemStack.with(Items.copper, 5000, Items.lead, 4000, Items.silicon, 2400, Items.graphite, 1600, CAitems.refinedOdium, 650));

const reliaventNode = new TechTree.TechNode(TechTree.get(units.adamantiteFactory), CAunits.reliavent, ItemStack.with(Items.surgeAlloy, 5000, Items.plastanium, 10000, CAitems.adamantite, 50, Items.thorium, 10000, Items.silicon, 10000));
const siloArrayNode = new TechTree.TechNode(TechTree.get(CAunits.reliavent), CAunits.siloArray, ItemStack.with(Items.surgeAlloy, 7000, Items.plastanium, 15000, CAitems.adamantite, 100, Items.thorium, 15000, Items.silicon, 15000));
const decimationNode = new TechTree.TechNode(TechTree.get(CAunits.siloArray), CAunits.decimation, ItemStack.with(Items.surgeAlloy, 9000, Items.plastanium, 18000, CAitems.adamantite, 150 ,Items.thorium, 18000, Items.silicon, 18000));
const carnageNode = new TechTree.TechNode(TechTree.get(CAunits.decimation), CAunits.carnage, ItemStack.with(Items.surgeAlloy, 12000, Items.plastanium, 20000, CAitems.adamantite, 200, Items.thorium, 20000, Items.silicon, 20000));
const DestructionNode = new TechTree.TechNode(TechTree.get(CAunits.carnage), CAunits.Destruction, ItemStack.with(Items.surgeAlloy, 15000, Items.plastanium, 20000, CAitems.adamantite, 250, Items.thorium, 25000, Items.silicon, 25000, Items.graphite, 10000));

const melterNode = new TechTree.TechNode(TechTree.get(units.adamantiteFactory), CAunits.melter, ItemStack.with(Items.surgeAlloy, 5000, Items.plastanium, 10000, CAitems.adamantite, 50, Items.thorium, 10000, Items.silicon, 10000));
const evasculatorNode = new TechTree.TechNode(TechTree.get(CAunits.melter), CAunits.evasculator, ItemStack.with(Items.surgeAlloy, 7000, Items.plastanium, 15000, CAitems.adamantite, 100, Items.thorium, 15000, Items.silicon, 15000));
const blasterNode = new TechTree.TechNode(TechTree.get(CAunits.evasculator), CAunits.blaster, ItemStack.with(Items.surgeAlloy, 9000, Items.plastanium, 18000, CAitems.adamantite, 150, Items.thorium, 18000, Items.silicon, 18000));
const catastrophereNode = new TechTree.TechNode(TechTree.get(CAunits.blaster), CAunits.catastrophere, ItemStack.with(Items.surgeAlloy, 12000, Items.plastanium, 20000, CAitems.adamantite, 200, Items.thorium, 20000, Items.silicon, 20000));
const DeathNode = new TechTree.TechNode(TechTree.get(CAunits.catastrophere), CAunits.Death, ItemStack.with(Items.surgeAlloy, 15000, Items.plastanium, 20000, CAitems.adamantite, 250, Items.thorium, 25000, Items.silicon, 25000, Items.graphite, 10000));

const paralysisNode = new TechTree.TechNode(TechTree.get(units.adamantiteFactory), CAunits.paralysis, ItemStack.with(Items.surgeAlloy, 5000, Items.plastanium, 10000, CAitems.adamantite, 50, Items.thorium, 10000, Items.silicon, 10000));
const ravagerNode = new TechTree.TechNode(TechTree.get(CAunits.paralysis), CAunits.ravager, ItemStack.with(Items.surgeAlloy, 7000, Items.plastanium, 15000, CAitems.adamantite, 100, Items.thorium, 15000, Items.silicon, 15000));
const abolisherNode = new TechTree.TechNode(TechTree.get(CAunits.ravager), CAunits.abolisher, ItemStack.with(Items.surgeAlloy, 9000, Items.plastanium, 18000, CAitems.adamantite, 150, Items.thorium, 18000, Items.silicon, 18000));
const warmongerNode = new TechTree.TechNode(TechTree.get(CAunits.abolisher), CAunits.warmonger, ItemStack.with(Items.surgeAlloy, 12000, Items.plastanium, 20000, CAitems.adamantite, 200, Items.thorium, 20000, Items.silicon, 20000));
const DemiseNode = new TechTree.TechNode(TechTree.get(CAunits.warmonger), CAunits.Demise, ItemStack.with(Items.surgeAlloy, 15000, Items.plastanium, 20000, CAitems.adamantite, 250, Items.thorium, 25000, Items.silicon, 25000, Items.graphite, 10000));

// Blocks
const graphiteFactoryNode = new TechTree.TechNode(TechTree.get(Blocks.multiPress), crafting.graphiteFactory, crafting.graphiteFactory.researchRequirements());
const coalPressNode = new TechTree.TechNode(TechTree.get(Blocks.coalCentrifuge), crafting.coalPress, crafting.coalPress.researchRequirements());
const freezerNode = new TechTree.TechNode(TechTree.get(Blocks.kiln), crafting.freezer, crafting.freezer.researchRequirements());
const iceMelterNode = new TechTree.TechNode(TechTree.get(Blocks.melter), crafting.iceMelter, crafting.iceMelter.researchRequirements());
const advancedPhaseWeaverNode = new TechTree.TechNode(TechTree.get(Blocks.phaseWeaver), crafting.advancedPhaseWeaver, crafting.advancedPhaseWeaver.researchRequirements());
const advancedCryofluidMixerNode = new TechTree.TechNode(TechTree.get(Blocks.cryofluidMixer), crafting.advancedCryofluidMixer, crafting.advancedCryofluidMixer.researchRequirements());
const surgePressNode = new TechTree.TechNode(TechTree.get(Blocks.surgeSmelter), crafting.surgePress, crafting.surgePress.researchRequirements());
const adamantiteForgeNode = new TechTree.TechNode(TechTree.get(Blocks.surgeSmelter), crafting.adamantiteForge, crafting.adamantiteForge.researchRequirements());
const advancedPlastaniumCompressorNode = new TechTree.TechNode(TechTree.get(Blocks.plastaniumCompressor), crafting.advancedPlastaniumCompressor, crafting.advancedPlastaniumCompressor.researchRequirements());
const scaleMelterNode = new TechTree.TechNode(TechTree.get(Blocks.melter), crafting.scaleMelter, crafting.scaleMelter.researchRequirements());
const scaleSeparatorNode = new TechTree.TechNode(TechTree.get(Blocks.separator), crafting.scaleSeparator, crafting.scaleSeparator.researchRequirements());
const odiumSmelterNode = new TechTree.TechNode(TechTree.get(Blocks.siliconSmelter), crafting.odiumSmelter, crafting.odiumSmelter.researchRequirements());4
const odiumRefineryNode = new TechTree.TechNode(TechTree.get(crafting.odiumSmelter), crafting.odiumRefinery, crafting.odiumRefinery.researchRequirements());
const cryogenicCompoundFuserNode = new TechTree.TechNode(TechTree.get(Blocks.cryofluidMixer), crafting.cryogenicCompoundFuser, crafting.cryogenicCompoundFuser.researchRequirements());
const advancedCoalCentrifugeNode = new TechTree.TechNode(TechTree.get(Blocks.coalCentrifuge), crafting.advancedCoalCentrifuge, crafting.advancedCoalCentrifuge.researchRequirements());
const scrapMixerNode = new TechTree.TechNode(TechTree.get(Blocks.separator), crafting.scrapMixer, crafting.scrapMixer.researchRequirements());
const siliconRefineryNode = new TechTree.TechNode(TechTree.get(Blocks.siliconCrucible), crafting.siliconRefinery, crafting.siliconRefinery.researchRequirements());
const metaglassCrucibleNode = new TechTree.TechNode(TechTree.get(Blocks.kiln), crafting.metaglassCrucible, crafting.metaglassCrucible.researchRequirements());
const advancedSporePressNode = new TechTree.TechNode(TechTree.get(Blocks.sporePress), crafting.advancedSporePress, crafting.advancedSporePress.researchRequirements());
const compactPlastaniumCompressorNode = new TechTree.TechNode(TechTree.get(crafting.advancedPlastaniumCompressor), crafting.compactPlastaniumCompressor, crafting.compactPlastaniumCompressor.researchRequirements());
const detonatiteMixerNode = new TechTree.TechNode(TechTree.get(Blocks.blastMixer), crafting.detonatiteMixer, crafting.detonatiteMixer.researchRequirements());
const multititaniumNode = new TechTree.TechNode(TechTree.get(Blocks.siliconCrucible), crafting.multititanium, crafting.multititanium.researchRequirements());
const multithoriumNode = new TechTree.TechNode(TechTree.get(Blocks.siliconCrucible), crafting.multithorium, crafting.multithorium.researchRequirements());
const multimixerNode = new TechTree.TechNode(TechTree.get(crafting.detonatiteMixer), crafting.multimixer, crafting.multimixer.researchRequirements());
const alloyRefineryNode = new TechTree.TechNode(TechTree.get(Blocks.surgeSmelter), crafting.alloyRefinery, crafting.alloyRefinery.researchRequirements());

const iceBlockNode = new TechTree.TechNode(TechTree.get(Blocks.copperWall), defense.iceBlock, defense.iceBlock.researchRequirements());
const iceBlockLargeNode = new TechTree.TechNode(TechTree.get(defense.iceBlock), defense.iceBlockLarge, defense.iceBlockLarge.researchRequirements());
const hyperWallNode = new TechTree.TechNode(TechTree.get(Blocks.phaseWallLarge), defense.hyperWall, defense.hyperWall.researchRequirements());
const adamantiteWallNode = new TechTree.TechNode(TechTree.get(Blocks.surgeWall), defense.adamantiteWall, defense.adamantiteWall.researchRequirements());
const adamantiteWallLargeNode = new TechTree.TechNode(TechTree.get(defense.adamantiteWall), defense.adamantiteWallLarge, defense.adamantiteWallLarge.researchRequirements());

const overdriverNode = new TechTree.TechNode(TechTree.get(Blocks.mender), effect.overdriver, effect.overdriver.researchRequirements());
const odiumMineNode = new TechTree.TechNode(TechTree.get(Blocks.shockMine), effect.odiumMine, effect.odiumMine.researchRequirements());
const intelNode = new TechTree.TechNode(TechTree.get(Blocks.coreNucleus), effect.intel, effect.intel.researchRequirements());
const megaVaultNode = new TechTree.TechNode(TechTree.get(Blocks.vault), effect.megaVault, effect.megaVault.researchRequirements());
const reconNode = new TechTree.TechNode(TechTree.get(Blocks.commandCenter), effect.recon, effect.recon.researchRequirements());
const adamantiteMendNode = new TechTree.TechNode(TechTree.get(Blocks.mendProjector), effect.adamantiteMend, effect.adamantiteMend.researchRequirements());
const adamantiteOverdriveNode = new TechTree.TechNode(TechTree.get(Blocks.overdriveProjector), effect.adamantiteOverdrive, effect.adamantiteOverdrive.researchRequirements());
const adamantiteForceNode = new TechTree.TechNode(TechTree.get(Blocks.forceProjector), effect.adamantiteForce, effect.adamantiteForce.researchRequirements());
const bombNode = new TechTree.TechNode(TechTree.get(Blocks.shockMine), effect.bomb, effect.bomb.researchRequirements());
const adamantiteLaunchPadNode = new TechTree.TechNode(TechTree.get(Blocks.launchPad), effect.adamantiteLaunchPad, effect.adamantiteLaunchPad.researchRequirements());

const adamantiteConveyorNode = new TechTree.TechNode(TechTree.get(Blocks.armoredConveyor), distribution.adamantiteConveyor, distribution.adamantiteConveyor.researchRequirements());
const armoredAdamantiteConveyorNode = new TechTree.TechNode(TechTree.get(Blocks.armoredConveyor), distribution.armoredAdamantiteConveyor, distribution.armoredAdamantiteConveyor.researchRequirements());
const adamantiteJunctionNode = new TechTree.TechNode(TechTree.get(Blocks.junction), distribution.adamantiteJunction, distribution.adamantiteJunction.researchRequirements());
const adamantiteBridgeNode = new TechTree.TechNode(TechTree.get(Blocks.itemBridge), distribution.adamantiteBridge, distribution.adamantiteBridge.researchRequirements());
const adamantiteSorterNode = new TechTree.TechNode(TechTree.get(Blocks.sorter), distribution.adamantiteSorter, distribution.adamantiteSorter.researchRequirements());
const adamantiteSorterInvertNode = new TechTree.TechNode(TechTree.get(Blocks.invertedSorter), distribution.adamantiteSorterInvert, distribution.adamantiteSorterInvert.researchRequirements());
const adamantiteRouterNode = new TechTree.TechNode(TechTree.get(Blocks.router), distribution.adamantiteRouter, distribution.adamantiteRouter.researchRequirements());
const adamantiteDistributorNode = new TechTree.TechNode(TechTree.get(Blocks.distributor), distribution.adamantiteDistributor, distribution.adamantiteDistributor.researchRequirements());
const adamantiteOverflowNode = new TechTree.TechNode(TechTree.get(Blocks.overflowGate), distribution.adamantiteOverflow, distribution.adamantiteOverflow.researchRequirements());
const adamantiteUnderflowNode = new TechTree.TechNode(TechTree.get(Blocks.underflowGate), distribution.adamantiteUnderflow, distribution.adamantiteUnderflow.researchRequirements());

const adamantitePumpNode = new TechTree.TechNode(TechTree.get(Blocks.thermalPump), liquid.adamantitePump, liquid.adamantitePump.researchRequirements());
const adamantiteConduitNode = new TechTree.TechNode(TechTree.get(Blocks.platedConduit), liquid.adamantiteConduit, liquid.adamantiteConduit.researchRequirements());
const adamantiteLiquidRouterNode = new TechTree.TechNode(TechTree.get(Blocks.liquidRouter), liquid.adamantiteLiquidRouter, liquid.adamantiteLiquidRouter.researchRequirements());
const adamantiteTankNode = new TechTree.TechNode(TechTree.get(Blocks.liquidTank), liquid.adamantiteTank, liquid.adamantiteTank.researchRequirements());
const adamantiteLiquidJuntionNode = new TechTree.TechNode(TechTree.get(Blocks.liquidJunction), liquid.adamantiteLiquidJuntion, liquid.adamantiteLiquidJuntion.researchRequirements());
const adamantiteBridgeConduitNode = new TechTree.TechNode(TechTree.get(Blocks.phaseConduit), liquid.adamantiteBridgeConduit, liquid.adamantiteBridgeConduit.researchRequirements());

const scaleGeneratorNode = new TechTree.TechNode(TechTree.get(Blocks.differentialGenerator), power.scaleGenerator, power.scaleGenerator.researchRequirements());
const adamantitePowerNodeNode = new TechTree.TechNode(TechTree.get(Blocks.surgeTower), power.adamantitePowerNode, power.adamantitePowerNode.researchRequirements());
const adamantiteThermalNode = new TechTree.TechNode(TechTree.get(Blocks.thermalGenerator), power.adamantiteThermal, power.adamantiteThermal.researchRequirements());
const detonatiteReactorNode = new TechTree.TechNode(TechTree.get(Blocks.impactReactor), power.detonatiteReactor, power.detonatiteReactor.researchRequirements());

const advancedCultivatorNode = new TechTree.TechNode(TechTree.get(Blocks.cultivator), production.advancedCultivator, production.advancedCultivator.researchRequirements());
const scaleCollectorNode = new TechTree.TechNode(TechTree.get(Blocks.waterExtractor), production.scaleCollector, production.scaleCollector.researchRequirements());
const adamantiteDrillNode = new TechTree.TechNode(TechTree.get(Blocks.blastDrill), production.adamantiteDrill, production.adamantiteDrill.researchRequirements());
const adamantiteDrillLargeNode = new TechTree.TechNode(TechTree.get(production.adamantiteDrill), production.adamantiteDrillLarge, production.adamantiteDrillLarge.researchRequirements());
const adamantiteOilExtractorNode = new TechTree.TechNode(TechTree.get(Blocks.oilExtractor), production.adamantiteOilExtractor, production.adamantiteOilExtractor.researchRequirements());

const evaporatorNode = new TechTree.TechNode(TechTree.get(Blocks.meltdown), turrets.evaporator, turrets.evaporator.researchRequirements());
const catalystNode = new TechTree.TechNode(TechTree.get(Blocks.foreshadow), turrets.catalyst, turrets.catalyst.researchRequirements());
const phoenixNode = new TechTree.TechNode(TechTree.get(turrets.megaburst), turrets.phoenix, turrets.phoenix.researchRequirements());
const ridgeNode = new TechTree.TechNode(TechTree.get(Blocks.duo), turrets.ridge, turrets.ridge.researchRequirements());
const edgeNode = new TechTree.TechNode(TechTree.get(turrets.arfazatan), turrets.edge, turrets.edge.researchRequirements());
const microburstNode = new TechTree.TechNode(TechTree.get(Blocks.duo), turrets.microburst, turrets.microburst.researchRequirements());
const megaburstNode = new TechTree.TechNode(TechTree.get(turrets.microburst), turrets.megaburst, turrets.megaburst.researchRequirements());
const arfazatanNode = new TechTree.TechNode(TechTree.get(Blocks.ripple), turrets.arfazatan, turrets.arfazatan.researchRequirements());
const fragmentNode = new TechTree.TechNode(TechTree.get(Blocks.scatter), turrets.fragment, turrets.fragment.researchRequirements());
const scatterMKIINode = new TechTree.TechNode(TechTree.get(Blocks.scatter), turrets.scatterMKII, turrets.scatterMKII.researchRequirements());
const shockwaveNode = new TechTree.TechNode(TechTree.get(Blocks.ripple), turrets.shockwave, turrets.shockwave.researchRequirements());
const staticalNode = new TechTree.TechNode(TechTree.get(turrets.arfazatan), turrets.statical, turrets.statical.researchRequirements());
const sykkhNode = new TechTree.TechNode(TechTree.get(Blocks.ripple), turrets.sykkh, turrets.sykkh.researchRequirements());
const sykkhMKIINode = new TechTree.TechNode(TechTree.get(turrets.sykkh), turrets.sykkhMKII, turrets.sykkhMKII.researchRequirements());
const swarmerMKIINode = new TechTree.TechNode(TechTree.get(Blocks.swarmer), turrets.swarmerMKII, turrets.swarmerMKII.researchRequirements());
const arcMKIINode = new TechTree.TechNode(TechTree.get(Blocks.arc), turrets.arcMKII, turrets.arcMKII.researchRequirements());
const arcMKIIINode = new TechTree.TechNode(TechTree.get(turrets.arcMKII), turrets.arcMKIII, turrets.arcMKIII.researchRequirements());
const theARCNode = new TechTree.TechNode(TechTree.get(turrets.arcMKIII), turrets.theARC, turrets.theARC.researchRequirements());

// For later
/*
const adamantiteReconstructorT4Node = new TechTree.TechNode(TechTree.get(Blocks.multiplicativeReconstructor), units.adamantiteReconstructorT4, ItemStack.with(Items.copper, 6000, CAitems.ice, 453563, Items.silicon, 4, CAitems.refinedOdium, 14));
adamantiteReconstructorT4Node.objectives.addAll(Seq.with(new Objectives.SectorComplete(SectorPresets.planetaryTerminal)));
*/

//const adamantiteFactoryNode = new TechTree.TechNode(TechTree.get(Blocks.airFactory), units.adamantiteFactory, units.adamantiteFactory.researchRequirements());
//adamantiteFactoryNode.objectives.addAll(Seq.with(new Objectives.Research(Blocks.surgeWall), new Objectives.SectorComplete(SectorPresets.planetaryTerminal)));