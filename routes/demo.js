const router = require('koa-router')()
const get = require('simple-get')
var md5 = require('md5');
var uuid = require('uuid');

var logger = require('../user_modules/logger');
var demoService = require('../services/demo/service/DemoService');

router.prefix('/demo')

router.get('/', function (ctx, next) {
    logger.info('demo');

    var before = {
        "diseaseId": 47,
        "hospitalId": 647,
        "deptId": 1,
        "wardId": 28,
        "doctorId": 23883,
        "patient_basic_info": {
            "_desp_": "患者基本信息表",
            "nameofInstitution": "徐州市中心医院",
            "dateofregistration": 1507686000000,
            "patientBasicInfoPatientUserName": "张三三",
            "patientBasicInfoIdCard": 42118197505185840,
            "patientBasicInfoGender": "男",
            "patientBasicInfoBirthday": 169609200000,
            "admissionAge": {
                "_desp_": "入院时年龄",
                "value": 42,
                "unit": "岁"
            },
            "patientBasicInfoOccupation": "建筑师",
            "patientBasicInfoEducationBackground": "高中",
            "admissionPathway": "门诊病人",
            "patientBasicInfoUrgentContactPhone": 13741258631,
            "patientBasicInfoContactAddress": "江苏省徐州市解放西路100号",
            "patientBasicInfoContactPersonTwo": "张思念",
            "patientBasicInfoContactPhone": 13741258631,
            "patient_medical_history": {
                "_desp_": "关联的子项: 患者病史 :: patient_medical_history",
                "toReport": "是",
                "patientMedicalHistoryAdmissionNumber": 887142,
                "patientMedicalHistoryAdmissionDate": 1507686000000,
                "patientMedicalHistoryDischargeDate": 1508294400000,
                "hospitalDiagnosis": "扩张性心肌病，心功能II级，高血压I级",
                "timeOfFirstDiagnosisOfHeartFailure": 1507689600000,
                "hospitalizationinRecentDecemberForWorseningHF": "是",
                "hexbugAdverseEventHospitalizationTimes": 1,
                "lastdischargeTime": 1508290800000,
                "lastTimeOfHospitalization": 1507689600000,
                "lastreasonsforHospital": "新发心衰",
                "heartfailureReason": "扩张型心肌病",
                "mainCause": "冠状动脉疾病",
                "atrialFibrillationOrFlutter": "是",
                "crtdImplantation": "否",
                "crtp": "否",
                "doImplantableCardioverterDefibrillatorPlacement": "是",
                "pacemakerimplantation": "是",
                "hexbugAdverseEventInfarction": "是",
                "coronaryIntervention": "否",
                "coronaryArteryBypassGraftAngiography": "否",
                "cerebralApoplexy": "否",
                "transientIschemicAttack": "否",
                "peripheralArterialDisease": "是",
                "diabetes": "是",
                "dyslipidemia": "否",
                "patientMedicalHistoryHypertension": "否",
                "historyofasthma": "否",
                "historyofchronicobstructivepulmonarydisease": "否",
                "chronicKidneyDisease": "否",
                "depression": "否",
                "checkThyroidFunction": "否",
                "historyofmalignancy": "否",
                "discharge_summary": {
                    "_desp_": "关联的子项: 出院小结 :: discharge_summary",
                    "outstatu": "是",
                    "dischargeDiagnosis": "扩张性心肌病，心功能II级",
                    "patientWhereabouts": "医嘱离院",
                    "withinOnemonthRehospitalization": "否"
                },
                "followup_visits": {
                    "_desp_": "关联的子项: 随访信息 :: followup_visits",
                    "distanceFromTheLastDischarge": {
                        "_desp_": "距上次出院时间",
                        "value": 350,
                        "unit": "天"
                    },
                    "followUpReserveAccessMode": "12月随访",
                    "outpatient": 754610,
                    "clinicDate": 1513737600000,
                    "isFollowUp": "是",
                    "reasonsForIncompleteFollowUp": "未完成随访的原因 :: string :: 患者失访，患者不能来，通过电话联系患者",
                    "ifDeath": "否",
                    "hexbugAdverseEventDeathOccurrenceTime": "死亡时间 :: date :: ",
                    "interveneComplicationsDeathCase": "死亡原因 :: string :: 心血管死亡，非心血管死亡，不详",
                    "deathDueToHeartFailure": "否",
                    "deathDueToCancer": "否",
                    "newHospitalization": "是",
                    "dischargeDate": 1508467200000,
                    "reasonsForFirstHospitalization": "心衰",
                    "firstHospitalizationIsPlanned": "是",
                    "reasonsForSecondHospitalization": "其它",
                    "secondHospitalizationIsPlanned": "否",
                    "reasonsForThirdHospitalization": "心衰",
                    "thirdHospitalizationIsPlanned": "否",
                    "reasonsForFourthHospitalization": "其它",
                    "fourthHospitalizationIsPlanned": "否",
                    "newImplantDevice": "未知",
                    "cardiacResynchronizationImplantation": "未知",
                    "doImplantableCardioverterDefibrillatorPlacement": "未知",
                    "midtermUnplannedFollowUp": "否",
                    "visitingMedicalProfessionals": "否",
                    "medicalProfessionals": "心脏科医生",
                    "doEchocardiography": "是",
                    "smokeStatus": " 适用",
                    "smokingStatus": " 既往",
                    "currentSymptoms": "不详",
                    "fatigueandFatigue": "轻度",
                    "shortnessofBreath": "不适用",
                    "abilitytofunction": "无受限",
                    "careSituation": "能够自理",
                    "dailyActivities": "无困难",
                    "otherBodyDiscomfort": "无不适",
                    "anxiety": "无焦虑和抑郁",
                    "selfEvaluationOfQualityOfLife": {
                        "_desp_": "生活质量自评",
                        "value": 70,
                        "unit": "分"
                    },
                    "physicalExamination": "测量/适用",
                    "patientMedicalHistoryWeight": {
                        "_desp_": "体重",
                        "value": 55,
                        "unit": "kg"
                    },
                    "patientMedicalHistorySystolicPressure": {
                        "_desp_": "收缩压",
                        "value": 120,
                        "unit": "mmHg"
                    },
                    "patientMedicalHistoryDiastolicPressure": {
                        "_desp_": "舒张压",
                        "value": 88,
                        "unit": "mmHg"
                    },
                    "heartRate": {
                        "_desp_": "心率",
                        "value": 65,
                        "unit": "bpm"
                    },
                    "lungRale": "有",
                    "increasedJugularVenousPressure": "否",
                    "peripheralEdema": "否",
                    "isArrhythmia": "是",
                    "rhythmofHeart": " 窦性心律",
                    "measurementAndTest": "测量/适用",
                    "checkBloodGlucoseFastingBloodSugar": {
                        "_desp_": "空腹血糖",
                        "value": 52,
                        "unit": "mmol/L"
                    },
                    "checkBloodGlucoseHba1c": {
                        "_desp_": "糖化血红蛋白",
                        "value": 1.55,
                        "unit": "%"
                    },
                    "checkBiochemicalCheckCreatinine": {
                        "_desp_": "血清肌酸酐",
                        "value": 25,
                        "unit": "μmol/L"
                    },
                    "checkBloodHemoglobin": {
                        "_desp_": "血红蛋白",
                        "value": 102,
                        "unit": "g/L"
                    },
                    "checkBiochemicalCheckSodium": {
                        "_desp_": "钠",
                        "value": 136,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckPotassium": {
                        "_desp_": "钾",
                        "value": 4.63,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckTotalCholesterol": {
                        "_desp_": "总胆固醇",
                        "value": 4.9,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckUricAcid": {
                        "_desp_": "尿酸",
                        "value": 213,
                        "unit": "umol/L"
                    },
                    "checkMyocardialEnzymesBnp": {
                        "_desp_": "BNP",
                        "value": 4670,
                        "unit": "pg/ml"
                    },
                    "checkMyocardialEnzymesNtProbnp": {
                        "_desp_": "NT-proBNP",
                        "value": 301.9,
                        "unit": "pg/ml"
                    },
                    "mrProANP": {
                        "_desp_": "MR-proANP",
                        "value": 256,
                        "unit": "pmol/L"
                    },
                    "eCGExamination": "做过",
                    "checkTime": 1508899200000,
                    "ecgheartrate": {
                        "_desp_": "心电图心率",
                        "value": "float",
                        "unit": ""
                    },
                    "electrocardiogram": "窦性节律",
                    "leftBundleBranchBlock": "是",
                    "qRSDuration": {
                        "_desp_": "QRS波时限",
                        "value": 0.12,
                        "unit": "ms"
                    },
                    "doEchocardiographyNear1Month": "未做",
                    "afterchestheartcolourtoexceedexaminationdate": 1508899200000,
                    "checkLeftVentricularEjectionFraction": {
                        "_desp_": "左心室射血分数",
                        "value": 72,
                        "unit": "%"
                    },
                    "checkEquipmentInspectionLvedd": {
                        "_desp_": "左室舒张末内径",
                        "value": 45,
                        "unit": "mm"
                    },
                    "sixminutewalktestorclimbtest": "未做",
                    "gradeFootTestDistance": 150,
                    "aceiDrug": "否",
                    "aceiDrugSpecific": "贝那普利,依那普利,赖诺普利 ,喹那普利",
                    "aceiDose": {
                        "_desp_": "ACEI药物剂量*",
                        "value": 0.15,
                        "unit": ""
                    },
                    "doseOfACEIChanges": "否",
                    "acceptRecommendedDoseOfACEI": "否",
                    "reasonsForNotReachingDoseOfACEI": "肾功能恶化",
                    "intoleranceOrTabooOfNoUseACEI": "否",
                    "theApplicationsOfAceiDrug": "肾动脉狭窄",
                    "arniDrug": "是",
                    "arniDrugSpecific": "沙库巴曲缬沙坦钠片",
                    "arniDose": {
                        "_desp_": "ARNI药物剂量",
                        "value": 0.5,
                        "unit": "mg/d"
                    },
                    "doseOfARNIChanges": "否",
                    "acceptRecommendedDoseOfARNI": "否",
                    "reasonsForNotReachingDoseOfARNI": "高血钾",
                    "intoleranceOrTabooOfNoUseARNI": "否",
                    "theApplicationsOfArniDrug": "低血压",
                    "arbUse": "否",
                    "arbDrugName": "复代文",
                    "arbDose": {
                        "_desp_": "ARB药物剂量",
                        "value": 1.2,
                        "unit": ""
                    },
                    "doseOfARBChanges": "是",
                    "acceptRecommendedDoseOfARB": "否",
                    "reasonsForNotReachingDoseOfARB": "低血压",
                    "intoleranceOrTabooOfNoUseARB": "是",
                    "theApplicationsOfArbDrug": " 血管性水肿",
                    "betaBlockerDrug": "否",
                    "betaBlockerName": "比索洛尔",
                    "betaBlockerDose": {
                        "_desp_": "β阻滞剂剂量*",
                        "value": 0.15,
                        "unit": "mg"
                    },
                    "doseOfBetaBlockerChanges": "否",
                    "acceptRecommendedDoseOfBetaBlocker": "否",
                    "reasonsForNotReachingDoseOfBetaBlocker": "心动过缓",
                    "intoleranceOrTabooOfNoUseBetaBlocker": "否",
                    "theApplicationsOfBetaBlockerDrug": "乏力,心动过缓",
                    "aldosterone": "是",
                    "aaDrugName": "螺内酯片",
                    "aaDose": {
                        "_desp_": "醛固酮拮抗剂剂量",
                        "value": 20,
                        "unit": ""
                    },
                    "doseOfARAChanges": "否",
                    "acceptRecommendedDoseOfARA": "否",
                    "reasonsForNotReachingDoseOfARA": " 高血钾",
                    "intoleranceOrTabooOfNoUseARA": "，否",
                    "heApplicationsOfAceiDrugAldosteroneReceptorAntagonist": "高血钾，",
                    "evastatinUse": "否",
                    "evastatinDose": {
                        "_desp_": "伊伐布雷定剂量",
                        "value": 2.5,
                        "unit": ""
                    },
                    "evastatinFrequency": "1次",
                    "doseOfEvastatinChanges": "否",
                    "acceptRecommendedDoseOfEvastatin": " 是",
                    "reasonsForNotReachingEvastatin": "心动过缓症状",
                    "intoleranceOrTabooOfNoUseEvastatin": "是",
                    "theApplicationsOfEvastatinDrug": "其它",
                    "thiazideDiuretic": "是",
                    "intramedullaryDiuretic": " 是",
                    "furosemideDose": {
                        "_desp_": "呋塞米剂量",
                        "value": 0.02,
                        "unit": "mg / d"
                    },
                    "torasemideDose": {
                        "_desp_": "托拉塞米剂量",
                        "value": 0.12,
                        "unit": "mg / d"
                    },
                    "bumetanideDose": {
                        "_desp_": "布美他尼剂量",
                        "value": 1.2,
                        "unit": "mg / d"
                    },
                    "etDose": {
                        "_desp_": "依他尼酸剂量",
                        "value": 0.5,
                        "unit": "mg / d"
                    },
                    "otherDiuretic": "氢氯噻嗪",
                    "otherDiureticDose": {
                        "_desp_": "其他利尿剂剂量*",
                        "value": 0.15,
                        "unit": "mg / d"
                    },
                    "digoxinUse": "否",
                    "qiLiQiangXinCapsule": "否",
                    "amiodarone": "是",
                    "otherAntiarrhythmicDrugs": "是",
                    "antiplateletDrug": " 是",
                    "antiplateletDrugName": "阿司匹林",
                    "anticoagulant": "否",
                    "anticoagulantDrugName": "华法林",
                    "statinsDrug": "否",
                    "ihydropyridineCalciumAntagonists": "否",
                    "nonTwoHydropyridineCalciumAntagonist": "是",
                    "nitratesDrugName": "硝酸酯",
                    "typeOfPositiveInotropicSupport": "否",
                    "typeOfPositiveInotropicSupportName": "多巴胺",
                    "nonsteroidalAntiinflammatoryDrugs": "否",
                    "antidiabeticDrugs": "是",
                    "antidiabeticDrugsName": "胰岛素",
                    "antidepressant": "是",
                    "thyroidHormoneReplacementTherapy": "否",
                    "randomizedControlledClinicalStudy": "否"
                },
                "checkup_stent": {
                    "_desp_": "关联的子项: 体格检查 :: checkup_stent",
                    "patientMedicalHistoryWeight": {
                        "_desp_": "体重",
                        "value": 55,
                        "unit": "kg"
                    },
                    "patientMedicalHistoryHeight": {
                        "_desp_": "身高（cm）",
                        "value": 175,
                        "unit": "cm"
                    },
                    "patientMedicalHistorySystolicPressure": {
                        "_desp_": "坐位动脉收缩压",
                        "value": 135,
                        "unit": "mmHg"
                    },
                    "patientMedicalHistoryDiastolicPressure": {
                        "_desp_": "坐位动脉舒张压",
                        "value": 88,
                        "unit": "mmHg"
                    },
                    "heartRate": {
                        "_desp_": "静息心率(手数测量)",
                        "value": 52,
                        "unit": "bpm"
                    },
                    "checkBloodGasAnalysisOxygenSaturation": {
                        "_desp_": "外周血氧饱和度",
                        "value": "float",
                        "unit": "%"
                    },
                    "lungRale": "否",
                    "increasedJugularVenousPressure": "否",
                    "peripheralEdema": "是",
                    "thirdHeartSound": "否",
                    "perfusionSigns": " 是"
                },
                "laboratory_examination": {
                    "_desp_": "关联的子项: 实验室检查 :: laboratory_examination",
                    "checkBloodGlucoseFastingBloodSugar": {
                        "_desp_": "空腹血糖",
                        "value": 8.2,
                        "unit": "mmol/L"
                    },
                    "checkBloodGlucoseHba1c": {
                        "_desp_": "糖化血红蛋白(HbA1C)",
                        "value": 215,
                        "unit": "%"
                    },
                    "checkBiochemicalCheckCreatinine": {
                        "_desp_": "血清肌酐",
                        "value": 78,
                        "unit": "μmol/L"
                    },
                    "checkBloodHemoglobin": {
                        "_desp_": "血红蛋白",
                        "value": 321,
                        "unit": "g/L"
                    },
                    "checkBiochemicalCheckSodium": {
                        "_desp_": "钠",
                        "value": 2.6,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckPotassium": {
                        "_desp_": "钾",
                        "value": 232,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckTotalCholesterol": {
                        "_desp_": "总胆固醇",
                        "value": 45,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckLowDensityLipoproteinCholesterol": {
                        "_desp_": "低密度脂蛋白",
                        "value": 3.12,
                        "unit": "mmol/L"
                    },
                    "checkBiochemicalCheckUricAcid": {
                        "_desp_": "尿酸",
                        "value": 208,
                        "unit": "umol/L"
                    },
                    "checkMyocardialEnzymesBnp": {
                        "_desp_": "BNP*",
                        "value": 7195,
                        "unit": "pg/ml"
                    },
                    "checkMyocardialEnzymesNtProbnp": {
                        "_desp_": "NT-proBNP*",
                        "value": 231,
                        "unit": "pg/ml"
                    },
                    "eCGExamination": "做过",
                    "ecgdate": 1509331200000,
                    "ecgheartrate": {
                        "_desp_": "心电图心率",
                        "value": 65,
                        "unit": ""
                    },
                    "electrocardiogram": "心房颤动/心房扑动",
                    "leftBundleBranchBlock": "是",
                    "qRSDuration": {
                        "_desp_": "QRS波时限",
                        "value": 2.8,
                        "unit": "ms"
                    },
                    "echocardiographyinrecent12": "做过",
                    "checkTime": 1509158400000,
                    "checkEquipmentInspectionEf": {
                        "_desp_": "射血分数*",
                        "value": 45,
                        "unit": "%"
                    },
                    "leftVentricularEndDiastolicVolume": 52,
                    "walkingtest": "未做",
                    "totalwalking": 258
                },
                "evaluation_of_drug_treatment": {
                    "_desp_": "关联的子项: 药物治疗2/2 :: evaluation_of_drug_treatment",
                    "evastatinUse": "否",
                    "evastatinDose": {
                        "_desp_": "伊伐布雷定剂量",
                        "value": 5,
                        "unit": ""
                    },
                    "evastatinFrequency": "2次",
                    "theSymptomsOfUseevastatinDrug": "否",
                    "reasonsForNoEvastatinDrugsSelected": "不耐受",
                    "theApplicationsOfEvastatinDrug": "不耐受",
                    "thiazideDiuretic": "否",
                    "intramedullaryDiuretic": "否",
                    "furosemideDose": {
                        "_desp_": "呋塞米剂量",
                        "value": 1.2,
                        "unit": "mg / d"
                    },
                    "torasemideDose": {
                        "_desp_": "托拉塞米剂量",
                        "value": 1.05,
                        "unit": "mg / d"
                    },
                    "bumetanideDose": {
                        "_desp_": "布美他尼剂量",
                        "value": 0.06,
                        "unit": "mg / d"
                    },
                    "etDose": {
                        "_desp_": "依他尼酸剂量",
                        "value": 0.04,
                        "unit": "mg / d"
                    },
                    "otherDiuretic": "托拉塞米",
                    "otherDiureticDose": {
                        "_desp_": "其他利尿剂剂量*",
                        "value": 1.25,
                        "unit": "mg / d"
                    },
                    "digoxinUse": "是",
                    "qiLiQiangXinCapsule": "否",
                    "amiodarone": "否",
                    "otherAntiarrhythmicDrugs": "否",
                    "antiplateletDrug": " 是",
                    "antiplateletDrugName": "替格瑞洛",
                    "anticoagulant": "否",
                    "anticoagulantDrugName": "阿哌沙班",
                    "statinsDrug": "否",
                    "ihydropyridineCalciumAntagonists": "否",
                    "nonTwoHydropyridineCalciumAntagonist": "否",
                    "nitratesUse": "是",
                    "typeOfPositiveInotropicSupport": "否",
                    "typeOfPositiveInotropicSupportName": "多巴酚丁胺",
                    "nonsteroidalAntiinflammatoryDrugs": "否",
                    "antidiabeticDrugs": "否",
                    "antidiabeticDrugsName": "服抗糖尿病药物",
                    "antidepressant": "否",
                    "thyroidHormoneReplacementTherapy": "否",
                    "randomizedControlledClinicalStudy": "否"
                },
                "cure_drugs": {
                    "_desp_": "关联的子项: 治疗药物 :: cure_drugs",
                    "aceiDrug": "否",
                    "aceiDrugSpecific": "依那普利",
                    "aceiDose": {
                        "_desp_": "ACEI药物剂量",
                        "value": 0.06,
                        "unit": "mg/d"
                    },
                    "reasonsForNoACEIDrugsSelected": "不耐受",
                    "theApplicationsOfAceiDrug": "肾动脉狭窄",
                    "arniDrug": "否",
                    "arniDrugSpecific": "沙库巴曲缬沙坦钠片",
                    "arniDose": {
                        "_desp_": "ARNI药物剂量",
                        "value": 0.25,
                        "unit": "mg/d"
                    },
                    "reasonsForNoArniDrugsSelected": "已应用ARB类药物",
                    "theApplicationsOfArniDrug": "咳嗽",
                    "arbUse": "否",
                    "arbDrugName": "海捷亚",
                    "arbDose": {
                        "_desp_": "ARB药物剂量",
                        "value": 1.25,
                        "unit": "mg/d"
                    },
                    "reasonsForNoUseArbDrugs": "不耐受",
                    "theApplicationsOfArbDrug": "低血压",
                    "betaBlockerDrug": "否",
                    "betaBlockerName": "酒石酸美托洛尔",
                    "betaBlockerDose": {
                        "_desp_": "β-受体阻滞剂剂量",
                        "value": 0.05,
                        "unit": "mg/d"
                    },
                    "betaBlockerUseOfAdvice": "患者要求",
                    "theApplicationsOfBetaBlockerDrug": "低血压",
                    "aldosterone": "否",
                    "aaDrugName": " 螺内酯",
                    "aaDose": {
                        "_desp_": "醛固酮受体阻断剂药物剂量",
                        "value": 1.25,
                        "unit": "mg / d"
                    },
                    "theSymptomsOfUseAldosteroneReceptorBlocker": "否",
                    "reasonsForNoAldosteroneReceptorAntagonistSelected": "不耐受",
                    "heApplicationsOfAceiDrugAldosteroneReceptorAntagonist": "高血钾"
                },
                "life_style": {
                    "_desp_": "关联的子项: 生活方式 :: life_style",
                    "drinkingSituation": "从不",
                    "smokingStatus": "已戒半年"
                },
                "present_symptoms": {
                    "_desp_": "关联的子项: 现症状 :: present_symptoms",
                    "fatigueandFatigue": "轻度",
                    "shortnessofBreath": "无",
                    "abilitytofunction": "降低",
                    "careSituation": "穿衣、洗澡部分困难",
                    "dailyActivities": "存在一定困难",
                    "otherBodyDiscomfort": "轻度不适",
                    "anxiety": "轻度焦虑或抑郁",
                    "selfEvaluationOfQualityOfLife": {
                        "_desp_": "生活质量自评",
                        "value": 56,
                        "unit": "分"
                    }
                }
            }
        }
    }

    var hospital_id = 206; // 测试医院

    var body = [{
        // "orgid": before.hospitalId,
        "orgid": hospital_id,
        "name": before.patient_basic_info.patientBasicInfoPatientUserName,
        "birth": before.patient_basic_info.patientBasicInfoBirthday,
        "sex": before.patient_basic_info.patientBasicInfoGender,
        "contact": before.patient_basic_info.patientBasicInfoUrgentContactPhone,
        "contact_name": before.patient_basic_info.patientBasicInfoContactPersonTwo,
        "address": before.patient_basic_info.patientBasicInfoContactAddress,
        "contact_phone": before.patient_basic_info.patientBasicInfoContactPhone,
        "job": before.patient_basic_info.patientBasicInfoOccupation,
        "edu": before.patient_basic_info.patientBasicInfoEducationBackground,
        "ptype": before.patient_basic_info.admissionPathway,
        "hos_number": before.patient_basic_info.patient_medical_history.patientMedicalHistoryAdmissionNumber,
        "smoking_status": before.patient_basic_info.patient_medical_history.life_style.smokingStatus,
        "drinking_status": before.patient_basic_info.patient_medical_history.life_style.drinkingSituation,
        "HOSPITALIZATION_TIME": before.patient_basic_info.patient_medical_history.hexbugAdverseEventHospitalizationTimes,
        "bein_time": before.patient_basic_info.patient_medical_history.patientMedicalHistoryAdmissionDate,
        "leave_time": before.patient_basic_info.patient_medical_history.patientMedicalHistoryDischargeDate,
        "HISRORY_HEART_FAL_YEAR": before.patient_basic_info.patient_medical_history.timeOfFirstDiagnosisOfHeartFailure,
        "hospitalization_reasons": before.patient_basic_info.patient_medical_history.lastreasonsforHospital,
        "main_reason": before.patient_basic_info.patient_medical_history.heartfailureReason,
        "main_incentives": before.patient_basic_info.patient_medical_history.mainCause,
        "heart_status": before.patient_basic_info.patient_medical_history.atrialFibrillationOrFlutter,
        "thyroid_sm": before.patient_basic_info.patient_medical_history.checkThyroidFunction,
        "is_cancer": before.patient_basic_info.patient_medical_history.historyofmalignancy,
        "is_congestive_sym": before.patient_basic_info.patient_medical_history.followup_visits.fatigueandFatigue,
        "con_level": before.patient_basic_info.patient_medical_history.followup_visits.shortnessofBreath,
        "activity_ability": before.patient_basic_info.patient_medical_history.followup_visits.abilitytofunction,
        "self_care_situation": before.patient_basic_info.patient_medical_history.followup_visits.careSituation,
        "daily_activities": before.patient_basic_info.patient_medical_history.followup_visits.dailyActivities,
        "somatic_discomfort": before.patient_basic_info.patient_medical_history.followup_visits.otherBodyDiscomfort,
        "depression": before.patient_basic_info.patient_medical_history.followup_visits.anxiety,
        "life_type": before.patient_basic_info.patient_medical_history.followup_visits.selfEvaluationOfQualityOfLife.value + before.patient_basic_info.patient_medical_history.followup_visits.selfEvaluationOfQualityOfLife.unit,
        "weight": before.patient_basic_info.patient_medical_history.followup_visits.patientMedicalHistoryWeight.value + before.patient_basic_info.patient_medical_history.followup_visits.patientMedicalHistoryWeight.unit,
        "height": before.patient_basic_info.patient_medical_history.checkup_stent.patientMedicalHistoryHeight.value + before.patient_basic_info.patient_medical_history.checkup_stent.patientMedicalHistoryHeight.unit,
        "result_kfxt": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodGlucoseFastingBloodSugar.value,
        "result_kfxt_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodGlucoseFastingBloodSugar.unit,
        "result_hba1c": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodGlucoseHba1c.value,
        "result_hba1c_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodGlucoseHba1c.unit,
        "result_xqjg": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckCreatinine.value,
        "result_xqjg_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckCreatinine.unit,
        "result_xhdb": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodHemoglobin.value,
        "result_xhdb_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBloodHemoglobin.unit,

        "result_na": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckSodium.value,
        "result_na_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckSodium.unit,

        "result_jia": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckPotassium.value,
        "result_jia_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckPotassium.unit,

        "result_zdgc": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckTotalCholesterol.value,
        "result_zdgc_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckTotalCholesterol.unit,

        "result_dmd": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckLowDensityLipoproteinCholesterol.value,
        "result_dmd_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckLowDensityLipoproteinCholesterol.unit,


        "result_ns": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckUricAcid.value,
        "result_ns_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckUricAcid.unit,



        "result_bnp_value": before.patient_basic_info.patient_medical_history.laboratory_examination.checkMyocardialEnzymesBnp.value,
        "result_bnp_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkMyocardialEnzymesBnp.unit,



        "nt_pro_value": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckLowDensityLipoproteinCholesterol.value,
        "nt_pro_unit": before.patient_basic_info.patient_medical_history.laboratory_examination.checkBiochemicalCheckLowDensityLipoproteinCholesterol.unit,



        "heart_dt": before.patient_basic_info.patient_medical_history.laboratory_examination.eCGExamination,
        "heart_dt_time": before.patient_basic_info.patient_medical_history.laboratory_examination.ecgdate,
        "heart_xl": before.patient_basic_info.patient_medical_history.laboratory_examination.ecgheartrate.value + before.patient_basic_info.patient_medical_history.laboratory_examination.ecgheartrate.unit,
        "qrs_time": before.patient_basic_info.patient_medical_history.laboratory_examination.qRSDuration.value + before.patient_basic_info.patient_medical_history.laboratory_examination.qRSDuration.unit,
        "is_chaox": before.patient_basic_info.patient_medical_history.laboratory_examination.echocardiographyinrecent12,
        "chaox_time": before.patient_basic_info.patient_medical_history.laboratory_examination.checkTime,
        "shex_score": before.patient_basic_info.patient_medical_history.laboratory_examination.checkEquipmentInspectionEf.value + before.patient_basic_info.patient_medical_history.laboratory_examination.checkEquipmentInspectionEf.unit,
        "heart_left_sz": before.patient_basic_info.patient_medical_history.laboratory_examination.leftVentricularEndDiastolicVolume,
        "is_acei":before.patient_basic_info.patient_medical_history.cure_drugs.aceiDrug,
        "puli_type":before.patient_basic_info.patient_medical_history.cure_drugs.aceiDrugSpecific,
        "puli_jil":before.patient_basic_info.patient_medical_history.cure_drugs.aceiDose.value+before.patient_basic_info.patient_medical_history.cure_drugs.aceiDose.unit,
        "is_taboo":before.patient_basic_info.patient_medical_history.cure_drugs.reasonsForNoACEIDrugsSelected


    }];

    // 签名算法
    var securet_key = 'Api0c57ef59942e018a765b09f51f55af3f';

    var now = Date.now().toString();
    var time_stamp = now.substring(0, now.length - 3);
    console.log('时间戳: ' + time_stamp);
    var random_str = uuid.v1().substring(0, 8);
    console.log('随机串: ' + random_str);
    // 排序
    var str = [time_stamp, random_str, securet_key].sort().join('');
    console.log('签名前字符串: ' + str);
    // 签名
    var sign_str = md5(str).toUpperCase();
    console.log('签名后字符串: ' + sign_str);

    var url = 'http://data.chinahfc.org/Ym_api/ym_respond' + '?timeStamp=' + time_stamp + '&randomStr=' + random_str + '&signature=' + sign_str;
    console.log(url);

    get.concat({
        url: url,
        method: 'POST',
        body: body,
        headers: {
            'timeStamp': time_stamp,
            'randomStr': random_str,
            'signature': sign_str
        },
        json: true,
        timeout: 10000
    }, function (err, res, data) {
        if (err) throw err;
        console.log(data);
    });

    ctx.response.type = 'json';
    ctx.body = body;

});

router.get('/json', function (ctx, next) {
    logger.info('json');

    ctx.body = {
        id: 1
    };
    ctx.response.type = 'json';
});

module.exports = router