cube(`g_caisse_article`, {
  sql_table: `dbo."GCaisseArticle"`,
  data_source: `default`,
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  joins: {},
  measures: {
    count: {
      type: `count`
    }
  },
  dimensions: {
    refbase: {
      sql: `${CUBE}."RefBase"`,
      type: `string`
    },
    arreference: {
      sql: `${CUBE}."ARReference"`,
      type: `string`
    },
    ardesignation: {
      sql: `${CUBE}."ARDesignation"`,
      type: `string`
    },
    arlibelletechnique: {
      sql: `${CUBE}."ARLibelleTechnique"`,
      type: `string`
    },
    arfamille: {
      sql: `${CUBE}."ARFamille"`,
      type: `string`
    },
    arcategorie: {
      sql: `${CUBE}."ARCategorie"`,
      type: `string`
    },
    arfournisseur: {
      sql: `${CUBE}."ARFournisseur"`,
      type: `string`
    },
    arpuventeht: {
      sql: `${CUBE}."ARPUVenteHT"`,
      type: `string`
    },
    artxtaxevt: {
      sql: `${CUBE}."ARTxTaxeVt"`,
      type: `string`
    },
    artxtaxeach: {
      sql: `${CUBE}."ARTxTaxeAch"`,
      type: `string`
    },
    arpuachatht: {
      sql: `${CUBE}."ARPUAchatHT"`,
      type: `string`
    },
    arqtestock: {
      sql: `${CUBE}."ARQteStock"`,
      type: `string`
    },
    arstockmin: {
      sql: `${CUBE}."ARStockMin"`,
      type: `string`
    },
    arremise: {
      sql: `${CUBE}."ARRemise"`,
      type: `string`
    },
    armarge: {
      sql: `${CUBE}."ARMarge"`,
      type: `string`
    },
    arprevient: {
      sql: `${CUBE}."ARPRevient"`,
      type: `string`
    },
    artxfraisgen: {
      sql: `${CUBE}."ARTxFraisGen"`,
      type: `string`
    },
    arfraisgen: {
      sql: `${CUBE}."ARFraisGen"`,
      type: `string`
    },
    arpvttc: {
      sql: `${CUBE}."ARPVTTC"`,
      type: `string`
    },
    arconsom: {
      sql: `${CUBE}."ARConsom"`,
      type: `string`
    },
    artype: {
      sql: `${CUBE}."ARType"`,
      type: `string`
    },
    arunitevnt: {
      sql: `${CUBE}."ARUniteVnt"`,
      type: `string`
    },
    aruniteach: {
      sql: `${CUBE}."ARUniteAch"`,
      type: `string`
    },
    arfraistrans: {
      sql: `${CUBE}."ARFraisTrans"`,
      type: `string`
    },
    arqteresv: {
      sql: `${CUBE}."ARQteResv"`,
      type: `string`
    },
    artypevalo: {
      sql: `${CUBE}."ARTypeValo"`,
      type: `string`
    },
    arcmp: {
      sql: `${CUBE}."ARCMP"`,
      type: `string`
    },
    arcrt1: {
      sql: `${CUBE}."ARCrt1"`,
      type: `string`
    },
    arcrt2: {
      sql: `${CUBE}."ARCrt2"`,
      type: `string`
    },
    arcrt3: {
      sql: `${CUBE}."ARCrt3"`,
      type: `string`
    },
    arcrt4: {
      sql: `${CUBE}."ARCrt4"`,
      type: `string`
    },
    arcrt5: {
      sql: `${CUBE}."ARCrt5"`,
      type: `string`
    },
    arcrt6: {
      sql: `${CUBE}."ARCrt6"`,
      type: `string`
    },
    arcrt7: {
      sql: `${CUBE}."ARCrt7"`,
      type: `string`
    },
    arcrt8: {
      sql: `${CUBE}."ARCrt8"`,
      type: `string`
    },
    arround: {
      sql: `${CUBE}."ARRound"`,
      type: `string`
    },
    arremplacement: {
      sql: `${CUBE}."ARRemplacement"`,
      type: `string`
    },
    qteminach: {
      sql: `${CUBE}."QteMinAch"`,
      type: `string`
    },
    qteminvt: {
      sql: `${CUBE}."QteMinVt"`,
      type: `string`
    },
    batiment: {
      sql: `${CUBE}."Batiment"`,
      type: `string`
    },
    integration: {
      sql: `${CUBE}."Integration"`,
      type: `string`
    },
    integrationach: {
      sql: `${CUBE}."IntegrationAch"`,
      type: `string`
    },
    arqtedlot: {
      sql: `${CUBE}."ARQteDLot"`,
      type: `string`
    },
    arqteflot: {
      sql: `${CUBE}."ARQteFLot"`,
      type: `string`
    },
    armargelot: {
      sql: `${CUBE}."ARMargeLot"`,
      type: `string`
    },
    arprixlot: {
      sql: `${CUBE}."ARPrixLot"`,
      type: `string`
    },
    arqtedgro: {
      sql: `${CUBE}."ARQteDGro"`,
      type: `string`
    },
    arqtefgro: {
      sql: `${CUBE}."ARQteFGro"`,
      type: `string`
    },
    armargegro: {
      sql: `${CUBE}."ARMargeGro"`,
      type: `string`
    },
    arprixgro: {
      sql: `${CUBE}."ARPrixGro"`,
      type: `string`
    },
    arqtedhyper: {
      sql: `${CUBE}."ARQteDHyper"`,
      type: `string`
    },
    arqtefhyper: {
      sql: `${CUBE}."ARQteFHyper"`,
      type: `string`
    },
    armargehyper: {
      sql: `${CUBE}."ARMargeHyper"`,
      type: `string`
    },
    arprixhyper: {
      sql: `${CUBE}."ARPrixHyper"`,
      type: `string`
    },
    ardatedpromo: {
      sql: `${CUBE}."ARDateDPromo"`,
      type: `string`
    },
    ardatefpromo: {
      sql: `${CUBE}."ARDateFPromo"`,
      type: `string`
    },
    armargepromo: {
      sql: `${CUBE}."ARMargePromo"`,
      type: `string`
    },
    arprixpromo: {
      sql: `${CUBE}."ARPrixPromo"`,
      type: `string`
    },
    arfidelite: {
      sql: `${CUBE}."ARFidelite"`,
      type: `string`
    },
    trvalptsfidelite: {
      sql: `${CUBE}."TRValPtsFidelite"`,
      type: `string`
    },
    uniteart: {
      sql: `${CUBE}."UniteArt"`,
      type: `string`
    },
    qteuniteart: {
      sql: `${CUBE}."QteUniteArt"`,
      type: `string`
    },
    arremachat: {
      sql: `${CUBE}."ARRemAchat"`,
      type: `string`
    },
    remc: {
      sql: `${CUBE}."RemC"`,
      type: `string`
    },
    rems: {
      sql: `${CUBE}."RemS"`,
      type: `string`
    },
    remp: {
      sql: `${CUBE}."RemP"`,
      type: `string`
    },
    remn: {
      sql: `${CUBE}."RemN"`,
      type: `string`
    },
    arcodefrs: {
      sql: `${CUBE}."ARCodeFrs"`,
      type: `string`
    },
    ardatecommande: {
      sql: `${CUBE}."ARDateCommande"`,
      type: `string`
    },
    ardatelivraison: {
      sql: `${CUBE}."ARDateLivraison"`,
      type: `string`
    },
    arstockmini: {
      sql: `${CUBE}."ARStockMini"`,
      type: `string`
    },
    ardelairecep: {
      sql: `${CUBE}."ARDelaiRecep"`,
      type: `string`
    },
    arcatfrs: {
      sql: `${CUBE}."ARCatFrs"`,
      type: `string`
    },
    remcat: {
      sql: `${CUBE}."RemCat"`,
      type: `string`
    },
    aruserst: {
      sql: `${CUBE}."ARUserST"`,
      type: `string`
    },
    aruserlt: {
      sql: `${CUBE}."ARUserLT"`,
      type: `string`
    },
    arusergr: {
      sql: `${CUBE}."ARUserGR"`,
      type: `string`
    },
    aruserhy: {
      sql: `${CUBE}."ARUserHY"`,
      type: `string`
    },
    armodif: {
      sql: `${CUBE}."ARModif"`,
      type: `string`
    },
    arafflot: {
      sql: `${CUBE}."ARAffLot"`,
      type: `string`
    },
    araffgro: {
      sql: `${CUBE}."ARAffGro"`,
      type: `string`
    },
    araffhyp: {
      sql: `${CUBE}."ARAffHyp"`,
      type: `string`
    },
    lotpromo: {
      sql: `${CUBE}."lotPromo"`,
      type: `string`
    },
    qtelotpromo: {
      sql: `${CUBE}."qteLotPromo"`,
      type: `string`
    },
    margelotpromo: {
      sql: `${CUBE}."MargeLotPromo"`,
      type: `string`
    },
    prixlotpromo: {
      sql: `${CUBE}."PrixLotPromo"`,
      type: `string`
    },
    arctrlst: {
      sql: `${CUBE}."ARCtrlST"`,
      type: `string`
    },
    arrevientremise: {
      sql: `${CUBE}."ARRevientRemise"`,
      type: `string`
    },
    arfodec: {
      sql: `${CUBE}."ARFodec"`,
      type: `string`
    },
    arat: {
      sql: `${CUBE}."ARAT"`,
      type: `string`
    },
    arfixevente: {
      sql: `${CUBE}."ARFixeVente"`,
      type: `string`
    },
    arfraisint: {
      sql: `${CUBE}."ARFraisInt"`,
      type: `string`
    },
    arnonfidelite: {
      sql: `${CUBE}."ARNonFidelite"`,
      type: `string`
    },
    stockable: {
      sql: `${CUBE}."STOCKABLE"`,
      type: `string`
    },
    dxffile: {
      sql: `${CUBE}."DXFFile"`,
      type: `string`
    },
    photo: {
      sql: `photo`,
      type: `string`
    },
    artlot: {
      sql: `${CUBE}."ARTLot"`,
      type: `string`
    },
    arancprevient: {
      sql: `${CUBE}."ARAncPRevient"`,
      type: `string`
    },
    arancpvente: {
      sql: `${CUBE}."ARAncPVente"`,
      type: `string`
    },
    arancmarge: {
      sql: `${CUBE}."ARAncMarge"`,
      type: `string`
    },
    ardatemodif: {
      sql: `${CUBE}."ARDateModif"`,
      type: `string`
    },
    arinactif: {
      sql: `${CUBE}."ARInactif"`,
      type: `string`
    },
    armargemin: {
      sql: `${CUBE}."ARMargeMin"`,
      type: `string`
    },
    arfraissupp: {
      sql: `${CUBE}."ARFraisSupp"`,
      type: `string`
    },
    arunitemob: {
      sql: `${CUBE}."ARUniteMob"`,
      type: `string`
    },
    prixmob: {
      sql: `${CUBE}."PrixMob"`,
      type: `string`
    },
    aruniteconsm: {
      sql: `${CUBE}."ARUniteConsm"`,
      type: `string`
    },
    prixconsom: {
      sql: `${CUBE}."PrixConsom"`,
      type: `string`
    },
    arvarprevconsom: {
      sql: `${CUBE}."ARvarPrevConsom"`,
      type: `string`
    },
    aruniteconduc: {
      sql: `${CUBE}."ARUniteConduc"`,
      type: `string`
    },
    prixconduct: {
      sql: `${CUBE}."Prixconduct"`,
      type: `string`
    },
    archargeconduct: {
      sql: `${CUBE}."ARChargeConduct"`,
      type: `string`
    },
    artxautrecharg: {
      sql: `${CUBE}."ARTxAutreCharg"`,
      type: `string`
    },
    arvalautrecharg: {
      sql: `${CUBE}."ARvalAutreCharg"`,
      type: `string`
    },
    arunitepunite: {
      sql: `${CUBE}."ARUnitePUnite"`,
      type: `string`
    },
    arqteconsom: {
      sql: `${CUBE}."ARQteConsom"`,
      type: `string`
    },
    arprixprod: {
      sql: `${CUBE}."ARPrixProd"`,
      type: `string`
    },
    arremprom: {
      sql: `${CUBE}."ARRemProm"`,
      type: `string`
    },
    nbvirg: {
      sql: `${CUBE}."NbVirg"`,
      type: `string`
    },
    idengp: {
      sql: `${CUBE}."IdENGP"`,
      type: `string`
    },
    paramngp: {
      sql: `${CUBE}."paramNGP"`,
      type: `string`
    },
    qrcode: {
      sql: `${CUBE}."QRCode"`,
      type: `string`
    },
    ard: {
      sql: `${CUBE}."ARD"`,
      type: `string`
    },
    arprojet: {
      sql: `${CUBE}."ARProjet"`,
      type: `string`
    },
    sixmaj: {
      sql: `${CUBE}."SixMAJ"`,
      type: `string`
    },
    idfam: {
      sql: `${CUBE}."IDFam"`,
      type: `string`
    },
    idcat: {
      sql: `${CUBE}."IDCat"`,
      type: `string`
    },
    arprixventemin: {
      sql: `${CUBE}."ARPrixVenteMin"`,
      type: `string`
    },
    arprixventemax: {
      sql: `${CUBE}."ARPrixVenteMax"`,
      type: `string`
    },
    desstock: {
      sql: `${CUBE}."DesStock"`,
      type: `string`
    },
    armodeetiquette: {
      sql: `${CUBE}."ARModeEtiquette"`,
      type: `string`
    },
    argammeoper: {
      sql: `${CUBE}."ARGammeOper"`,
      type: `string`
    },
    wfstatitem: {
      sql: `${CUBE}."WFStatItem"`,
      type: `string`
    },
    integinvest: {
      sql: `${CUBE}."IntegInvest"`,
      type: `string`
    },
    ardernierach: {
      sql: `${CUBE}."ARDernierAch"`,
      type: `time`
    }
  },
  preAggregations: {
    main: {
      measures: [g_caisse_article.count],
      dimensions: [g_caisse_article.arfamille, g_caisse_article.arqteresv]
    }
  }
});