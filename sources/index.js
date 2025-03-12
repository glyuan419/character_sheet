var character = Object()

function read_sheet() {
    character.character_name = character_name.value;
    character.race = race.value;
    character.class_level = class_level.value;
    character.multiclass_name = multiclass_name.value;
    character.multiclass_level = multiclass_level.value;
    character.experience_points = experience_points.value;
    character.strength_score = strength_score.value;
    character.dexterity_score = dexterity_score.value;
    character.constitution_score = constitution_score.value;
    character.intelligence_score = intelligence_score.value;
    character.wisdom_score = wisdom_score.value;
    character.charisma_score = charisma_score.value;
    character.initiative_bonus = initiative_bonus.value;
    character.armor_class_bonus = armor_class_bonus.value;
    character.current_hit_point = current_hit_point.value;
    character.hit_point_maximum = hit_point_maximum.value;
    character.current_hit_dice = current_hit_dice.value;
    character.temporary_hit_point = temporary_hit_point.value;
    character.inspiration_dice = inspiration_dice.value;
    character.misc_ability_name = misc_ability_name.value;
    character.misc_ability_value = misc_ability_value.value;
    character.conditions = conditions.value;
    character.immunization = immunization.value;
    character.vulnerability = vulnerability.value;
    character.resistance = resistance.value;
    character.weapon_1_name = weapon_1_name.value;
    character.weapon_1_notes = weapon_1_notes.value;
    character.weapon_1_damage = weapon_1_damage.value;
    character.weapon_2_name = weapon_2_name.value;
    character.weapon_2_notes = weapon_2_notes.value;
    character.weapon_2_damage = weapon_2_damage.value;
    character.weapon_3_name = weapon_3_name.value;
    character.weapon_3_notes = weapon_3_notes.value;
    character.weapon_3_damage = weapon_3_damage.value;
    character.athletics_mics = athletics_mics.value;
    character.acrobatics_mics = acrobatics_mics.value;
    character.sleight_of_hand_mics = sleight_of_hand_mics.value;
    character.stealth_mics = stealth_mics.value;
    character.investigation_mics = investigation_mics.value;
    character.arcana_mics = arcana_mics.value;
    character.history_mics = history_mics.value;
    character.nature_mics = nature_mics.value;
    character.religion_mics = religion_mics.value;
    character.perception_mics = perception_mics.value;
    character.insight_mics = insight_mics.value;
    character.animal_handling_mics = animal_handling_mics.value;
    character.medicine_mics = medicine_mics.value;
    character.survival_mics = survival_mics.value;
    character.persuasion_mics = persuasion_mics.value;
    character.deception_mics = deception_mics.value;
    character.intimidation_mics = intimidation_mics.value;
    character.performance_mics = performance_mics.value;
    character.equipment_head = equipment_head.value;
    character.equipment_neck = equipment_neck.value;
    character.equipment_shoulders = equipment_shoulders.value;
    character.equipment_back = equipment_back.value;
    character.equipment_torso = equipment_torso.value;
    character.equipment_arms = equipment_arms.value;
    character.equipment_hands = equipment_hands.value;
    character.equipment_waist = equipment_waist.value;
    character.equipment_legs = equipment_legs.value;
    character.equipment_feet = equipment_feet.value;
    character.shield_name = shield_name.value;
    character.spell_1_name = spell_1_name.value;
    character.spell_1_damage = spell_1_damage.value;
    character.spell_2_name = spell_2_name.value;
    character.spell_2_damage = spell_2_damage.value;
    character.gold_pieces = gold_pieces.value;
    character.silver_pieces = silver_pieces.value;
    character.copper_pieces = copper_pieces.value;
    character.current_encumbrance = current_encumbrance.value;
    
    character.class_name = class_name.selectedIndex;
    character.strength_proficiency = strength_proficiency.selectedIndex;
    character.dexterity_proficiency = dexterity_proficiency.selectedIndex;
    character.constitution_proficiency = constitution_proficiency.selectedIndex;
    character.intelligence_proficiency = intelligence_proficiency.selectedIndex;
    character.wisdom_proficiency = wisdom_proficiency.selectedIndex;
    character.charisma_proficiency = charisma_proficiency.selectedIndex;
    character.key_ability = key_ability.selectedIndex;
    character.weapon_1_ability = weapon_1_ability.selectedIndex;
    character.weapon_2_ability = weapon_2_ability.selectedIndex;
    character.weapon_3_ability = weapon_3_ability.selectedIndex;
    character.athletics_proficiency = athletics_proficiency.selectedIndex;
    character.acrobatics_proficiency = acrobatics_proficiency.selectedIndex;
    character.sleight_of_hand_proficiency = sleight_of_hand_proficiency.selectedIndex;
    character.investigation_proficiency = investigation_proficiency.selectedIndex;
    character.stealth_proficiency = stealth_proficiency.selectedIndex;
    character.arcana_proficiency = arcana_proficiency.selectedIndex;
    character.history_proficiency = history_proficiency.selectedIndex;
    character.nature_proficiency = nature_proficiency.selectedIndex;
    character.religion_proficiency = religion_proficiency.selectedIndex;
    character.perception_proficiency = perception_proficiency.selectedIndex;
    character.insight_proficiency = insight_proficiency.selectedIndex;
    character.animal_handling_proficiency = animal_handling_proficiency.selectedIndex;
    character.medicine_proficiency = medicine_proficiency.selectedIndex;
    character.survival_proficiency = survival_proficiency.selectedIndex;
    character.persuasion_proficiency = persuasion_proficiency.selectedIndex;
    character.deception_proficiency = deception_proficiency.selectedIndex;
    character.intimidation_proficiency = intimidation_proficiency.selectedIndex;
    character.performance_proficiency = performance_proficiency.selectedIndex;
    character.armor_type = armor_type.selectedIndex;
    character.armor_name = armor_name.selectedIndex;
}

function write_sheet() {
    character_name.value = character.character_name;
    race.value = character.race;
    class_level.value = character.class_level;
    multiclass_name.value = character.multiclass_name;
    multiclass_level.value = character.multiclass_level;
    experience_points.value = character.experience_points;
    strength_score.value = character.strength_score;
    dexterity_score.value = character.dexterity_score;
    constitution_score.value = character.constitution_score;
    intelligence_score.value = character.intelligence_score;
    wisdom_score.value = character.wisdom_score;
    charisma_score.value = character.charisma_score;
    initiative_bonus.value = character.initiative_bonus;
    armor_class_bonus.value = character.armor_class_bonus;
    current_hit_point.value = character.current_hit_point;
    hit_point_maximum.value = character.hit_point_maximum;
    current_hit_dice.value = character.current_hit_dice;
    temporary_hit_point.value = character.temporary_hit_point;
    inspiration_dice.value = character.inspiration_dice;
    misc_ability_name.value = character.misc_ability_name;
    misc_ability_value.value = character.misc_ability_value;
    conditions.value = character.conditions;
    immunization.value = character.immunization;
    vulnerability.value = character.vulnerability;
    resistance.value = character.resistance;
    weapon_1_name.value = character.weapon_1_name;
    weapon_1_notes.value = character.weapon_1_notes;
    weapon_1_damage.value = character.weapon_1_damage;
    weapon_2_name.value = character.weapon_2_name;
    weapon_2_notes.value = character.weapon_2_notes;
    weapon_2_damage.value = character.weapon_2_damage;
    weapon_3_name.value = character.weapon_3_name;
    weapon_3_notes.value = character.weapon_3_notes;
    weapon_3_damage.value = character.weapon_3_damage;
    athletics_mics.value = character.athletics_mics;
    acrobatics_mics.value = character.acrobatics_mics;
    sleight_of_hand_mics.value = character.sleight_of_hand_mics;
    stealth_mics.value = character.stealth_mics;
    investigation_mics.value = character.investigation_mics;
    arcana_mics.value = character.arcana_mics;
    history_mics.value = character.history_mics;
    nature_mics.value = character.nature_mics;
    religion_mics.value = character.religion_mics;
    perception_mics.value = character.perception_mics;
    insight_mics.value = character.insight_mics;
    animal_handling_mics.value = character.animal_handling_mics;
    medicine_mics.value = character.medicine_mics;
    survival_mics.value = character.survival_mics;
    persuasion_mics.value = character.persuasion_mics;
    deception_mics.value = character.deception_mics;
    intimidation_mics.value = character.intimidation_mics;
    performance_mics.value = character.performance_mics;
    equipment_head.value = character.equipment_head;
    equipment_neck.value = character.equipment_neck;
    equipment_shoulders.value = character.equipment_shoulders;
    equipment_back.value = character.equipment_back;
    equipment_torso.value = character.equipment_torso;
    equipment_arms.value = character.equipment_arms;
    equipment_hands.value = character.equipment_hands;
    equipment_waist.value = character.equipment_waist;
    equipment_legs.value = character.equipment_legs;
    equipment_feet.value = character.equipment_feet;
    shield_name.value = character.shield_name;
    spell_1_name.value = character.spell_1_name;
    spell_1_damage.value = character.spell_1_damage;
    spell_2_name.value = character.spell_2_name;
    spell_2_damage.value = character.spell_2_damage;
    gold_pieces.value = character.gold_pieces;
    silver_pieces.value = character.silver_pieces;
    copper_pieces.value = character.copper_pieces;
    current_encumbrance.value = character.current_encumbrance;
    
    class_name.selectedIndex = character.class_name;
    strength_proficiency.selectedIndex = character.strength_proficiency;
    dexterity_proficiency.selectedIndex = character.dexterity_proficiency;
    constitution_proficiency.selectedIndex = character.constitution_proficiency;
    intelligence_proficiency.selectedIndex = character.intelligence_proficiency;
    wisdom_proficiency.selectedIndex = character.wisdom_proficiency;
    charisma_proficiency.selectedIndex = character.charisma_proficiency;
    key_ability.selectedIndex = character.key_ability;
    weapon_1_ability.selectedIndex = character.weapon_1_ability;
    weapon_2_ability.selectedIndex = character.weapon_2_ability;
    weapon_3_ability.selectedIndex = character.weapon_3_ability;
    athletics_proficiency.selectedIndex = character.athletics_proficiency;
    acrobatics_proficiency.selectedIndex = character.acrobatics_proficiency;
    sleight_of_hand_proficiency.selectedIndex = character.sleight_of_hand_proficiency;
    investigation_proficiency.selectedIndex = character.investigation_proficiency;
    stealth_proficiency.selectedIndex = character.stealth_proficiency;
    arcana_proficiency.selectedIndex = character.arcana_proficiency;
    history_proficiency.selectedIndex = character.history_proficiency;
    nature_proficiency.selectedIndex = character.nature_proficiency;
    religion_proficiency.selectedIndex = character.religion_proficiency;
    perception_proficiency.selectedIndex = character.perception_proficiency;
    insight_proficiency.selectedIndex = character.insight_proficiency;
    animal_handling_proficiency.selectedIndex = character.animal_handling_proficiency;
    medicine_proficiency.selectedIndex = character.medicine_proficiency;
    survival_proficiency.selectedIndex = character.survival_proficiency;
    persuasion_proficiency.selectedIndex = character.persuasion_proficiency;
    deception_proficiency.selectedIndex = character.deception_proficiency;
    intimidation_proficiency.selectedIndex = character.intimidation_proficiency;
    performance_proficiency.selectedIndex = character.performance_proficiency;
    armor_type.selectedIndex = character.armor_type;
    armor_name.selectedIndex = character.armor_name;
}

function save_data(data_name) {
    read_sheet();
    zui.store.set(data_name, character);
}

function load_data(data_name) {
    character = zui.store.get(data_name);
    write_sheet();
    compute();
}

function compute() {
    // 熟练加值
    proficiency_bonus.innerText = parseInt((Number(class_level.value)-1)/4)+2

    // 属性调整值
    // 属性豁免
    strength_modifier.innerText = parseInt(Number(strength_score.value)/2)-5;
    strength_saving.innerText = parseInt(Number(strength_score.value)/2)-5
                              + strength_proficiency.selectedIndex*Number(proficiency_bonus.innerText);
    dexterity_modifier.innerText = parseInt(Number(dexterity_score.value)/2)-5;
    dexterity_saving.innerText = parseInt(Number(dexterity_score.value)/2)-5
                               + dexterity_proficiency.selectedIndex*Number(proficiency_bonus.innerText);
    constitution_modifier.innerText = parseInt(Number(constitution_score.value)/2)-5;
    constitution_saving.innerText = parseInt(Number(constitution_score.value)/2)-5
                                  + constitution_proficiency.selectedIndex*Number(proficiency_bonus.innerText);
    intelligence_modifier.innerText = parseInt(Number(intelligence_score.value)/2)-5;
    intelligence_saving.innerText = parseInt(Number(intelligence_score.value)/2)-5
                                  + intelligence_proficiency.selectedIndex*Number(proficiency_bonus.innerText);
    wisdom_modifier.innerText = parseInt(Number(wisdom_score.value)/2)-5;
    wisdom_saving.innerText = parseInt(Number(wisdom_score.value)/2)-5
                            + wisdom_proficiency.selectedIndex*Number(proficiency_bonus.innerText);
    charisma_modifier.innerText = parseInt(Number(charisma_score.value)/2)-5;
    charisma_saving.innerText = parseInt(Number(charisma_score.value)/2)-5
                              + charisma_proficiency.selectedIndex*Number(proficiency_bonus.innerText);

    // 技能 = 属性调整值 + 可能的熟练加值 + 吟游诗人万事通 + 其它
    athletics_score.innerText = Number(strength_modifier.innerText)
                           + athletics_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && athletics_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(athletics_mics.value);
    acrobatics_score.innerText = Number(dexterity_modifier.innerText)
                           + acrobatics_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && acrobatics_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(acrobatics_mics.value);
    sleight_of_hand_score.innerText = Number(dexterity_modifier.innerText)
                           + sleight_of_hand_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && sleight_of_hand_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(sleight_of_hand_mics.value);
    stealth_score.innerText = Number(dexterity_modifier.innerText)
                           + stealth_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && stealth_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(stealth_mics.value);
    investigation_score.innerText = Number(intelligence_modifier.innerText)
                           + investigation_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && investigation_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(investigation_mics.value);
    arcana_score.innerText = Number(intelligence_modifier.innerText)
                           + arcana_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && arcana_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(arcana_mics.value);
    history_score.innerText = Number(intelligence_modifier.innerText)
                           + history_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && history_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(history_mics.value);
    nature_score.innerText = Number(intelligence_modifier.innerText)
                           + nature_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && nature_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(nature_mics.value);
    religion_score.innerText = Number(intelligence_modifier.innerText)
                           + religion_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && religion_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(religion_mics.value);
    perception_score.innerText = Number(wisdom_modifier.innerText)
                           + perception_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && perception_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(perception_mics.value);
    insight_score.innerText = Number(wisdom_modifier.innerText)
                           + insight_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && insight_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(insight_mics.value);
    animal_handling_score.innerText = Number(wisdom_modifier.innerText)
                           + animal_handling_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && animal_handling_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(animal_handling_mics.value);
    medicine_score.innerText = Number(wisdom_modifier.innerText)
                           + medicine_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && medicine_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(medicine_mics.value);
    survival_score.innerText = Number(wisdom_modifier.innerText)
                           + survival_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && survival_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(survival_mics.value);
    persuasion_score.innerText = Number(charisma_modifier.innerText)
                           + persuasion_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && persuasion_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(persuasion_mics.value);
    deception_score.innerText = Number(charisma_modifier.innerText)
                           + deception_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && deception_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(deception_mics.value);
    intimidation_score.innerText = Number(charisma_modifier.innerText)
                           + intimidation_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && intimidation_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(intimidation_mics.value);
    performance_score.innerText = Number(charisma_modifier.innerText)
                           + performance_proficiency.selectedIndex*Number(proficiency_bonus.innerText)
                           + Number((class_name.selectedIndex==3 && performance_proficiency.selectedIndex==0)?
                                 (parseInt(Number(proficiency_bonus.innerText)/2)):(0))
                           + Number(performance_mics.value);

    // 先攻 = 敏捷调整值 + 其它 + 吟游诗人万事通
    initiative_score.innerText = Number(dexterity_modifier.innerText) + Number(initiative_bonus.value)
                               + Number((class_name.selectedIndex==3)?(parseInt(Number(proficiency_bonus.innerText)/2)):(0));
    // DC
    ability_list = ['strength', 'dexterity', 'intelligence', 'wisdom', 'charisma'];
    difficulty_class.value = 8 + Number(proficiency_bonus.innerText)
                     + Number($('#'+ability_list[key_ability.selectedIndex]+'_modifier')[0].innerText);
    // 被动察觉 = 10 + 察觉技能值
    passive_wisdom.value = 10 + Number(perception_score.innerText);
    total_hit_dice.value = class_level.value;
    // 生命值恢复
    hit_dice_list = ['1d8', '1d8', '1d12', '1d8', '1d8', '1d8', '1d10', '1d8', '1d10', '1d10', '1d8', '1d6', '1d8', '1d6'];
    hit_dice.innerText = hit_dice_list[class_name.selectedIndex];
    // 左手武器攻击命中
    ability_list = ['strength', 'dexterity'];
    attack_bonus = Number($('#'+ability_list[weapon_1_ability.selectedIndex]+'_modifier')[0].innerText)
                 + Number(proficiency_bonus.innerText);
    attack_bonus = (attack_bonus>=0) ? ('+'+attack_bonus) : (attack_bonus);
    weapon_1_attack.innerText = '1d20' + attack_bonus;
    // 左手武器伤害骰
    weapon_1_damage_dice.innerText = weapon_1_damage.value;
    // 右手武器攻击命中
    attack_bonus = Number($('#'+ability_list[weapon_2_ability.selectedIndex]+'_modifier')[0].innerText)
                 + Number(proficiency_bonus.innerText);
    attack_bonus = (attack_bonus>=0) ? ('+'+attack_bonus) : (attack_bonus);
    weapon_2_attack.innerText = '1d20' + attack_bonus;
    // 右手武器伤害骰
    weapon_2_damage_dice.innerText = weapon_2_damage.value;
    // 双手武器攻击命中
    attack_bonus = Number($('#'+ability_list[weapon_3_ability.selectedIndex]+'_modifier')[0].innerText)
                 + Number(proficiency_bonus.innerText);
    attack_bonus = (attack_bonus>=0) ? ('+'+attack_bonus) : (attack_bonus);
    weapon_3_attack.innerText = '1d20' + attack_bonus;
    // 双手武器伤害骰
    weapon_3_damage_dice.innerText = weapon_3_damage.value;
    // 法术 1 攻击命中
    ability_list = ['strength', 'dexterity', 'intelligence', 'wisdom', 'charisma'];
    attack_bonus = Number($('#'+ability_list[key_ability.selectedIndex]+'_modifier')[0].innerText)
                 + Number(proficiency_bonus.innerText);
    attack_bonus = (attack_bonus>=0) ? ('+'+attack_bonus) : (attack_bonus);
    spell_1_attack.innerText = '1d20' + attack_bonus;
    // 法术 1 伤害骰
    spell_1_damage_dice.innerText = spell_1_damage.value;
    // 法术 2 攻击命中
    attack_bonus = Number($('#'+ability_list[key_ability.selectedIndex]+'_modifier')[0].innerText)
                 + Number(proficiency_bonus.innerText);
    attack_bonus = (attack_bonus>=0) ? ('+'+attack_bonus) : (attack_bonus);
    spell_2_attack.innerText = '1d20' + attack_bonus;
    // 法术 2 伤害骰
    spell_2_damage_dice.innerText = spell_2_damage.value;

    // AC = 10 + 敏捷调整值 + 护甲 + 盾牌 + 其它
    if (armor_type.selectedIndex == 0) {
        if (armor_name.selectedIndex == 0) {
            armor_class_score.value = 13 + Number(dexterity_modifier.innerText);
        } else if (armor_name.selectedIndex == 1) {
            armor_class_score.value = 10 + Number(dexterity_modifier.innerText) + Number(constitution_modifier.innerText);
        } else if (armor_name.selectedIndex == 2) {
            armor_class_score.value = 10 + Number(dexterity_modifier.innerText) + Number(wisdom_modifier.innerText);
        }
    } else if (armor_type.selectedIndex == 1) {
        armor_class_score.value = [11, 11, 12][armor_name.selectedIndex] + Number(dexterity_modifier.innerText);
    } else if (armor_type.selectedIndex == 2) {
        armor_class_score.value = [12, 13, 14, 14, 15][armor_name.selectedIndex] + Math.min(2, Number(dexterity_modifier.innerText));
    } else if (armor_type.selectedIndex == 3) {
        armor_class_score.value = [14, 16, 17, 18][armor_name.selectedIndex];
    }
    if (shield_name.value != '') {
        armor_class_score.value = Number(armor_class_score.value) + 2;
    }
    armor_class_score.value = Number(armor_class_score.value) + Number(armor_class_bonus.value);
}

function roll_dice(dice_value) {
    let dice_result = 0;
    let dice_info = ' = ';

    if ((new RegExp(/^[0-9]+$/)).test(dice_value)) { // 1
        let dice = Math.floor(Math.random() * 20) + 1;
        dice_result += dice;
        dice_result += Number(dice_value);
        if (dice==1) dice = '<span class=\'text-danger\'>' + dice + '</span>';
        if (dice==20) dice = '<span class=\'text-success\'>' + dice + '</span>';
        dice_info += '[' + dice + ']+';
        dice_info += dice_value;
    } else if ((new RegExp(/^[0-9]+d[0-9]+\+[0-9]+$/)).test(dice_value)) { // 1d20+1
        let N = Number(dice_value.split('d')[0]);
        for (let i=0; i < N; i++) {
            let dice = Math.floor(Math.random() * Number(dice_value.split('d')[1].split('+')[0])) + 1;
            dice_result += dice;
            if (Number(dice_value.split('d')[1].split('+')[0])==20 && dice==1) {
                dice = '<span class=\'text-danger\'>' + dice + '</span>';
            }
            if (Number(dice_value.split('d')[1].split('+')[0])==20 && dice==20) {
                dice = '<span class=\'text-success\'>' + dice + '</span>';
            }
            dice_info += '[' + dice + ']+';
        }
        dice_result += Number(dice_value.split('+')[1]);
        dice_info += Number(dice_value.split('+')[1]);
    } else if ((new RegExp(/^[0-9]+d[0-9]+$/)).test(dice_value)) { // 1d20
        let N = Number(dice_value.split('d')[0]);
        for (let i=0; i < N; i++) {
            let dice = Math.floor(Math.random() * Number(dice_value.split('d')[1])) + 1;
            dice_result += dice;
            if (Number(dice_value.split('d')[1])==20 && dice==1) {
                dice = '<span class=\'text-danger\'>' + dice + '</span>';
            }
            if (Number(dice_value.split('d')[1])==20 && dice==20) {
                dice = '<span class=\'text-success\'>' + dice + '</span>';
            }
            dice_info += '[' + dice + ']+';
        }
        dice_info = dice_info.slice(0, -1);
    } else if ((new RegExp(/^\+[0-9]+$/)).test(dice_value)) { // +1
        let dice = Math.floor(Math.random() * 20) + 1;
        dice_result += dice;
        dice_result += Number(dice_value);
        if (dice==1) dice = '<span class=\'text-danger\'>' + dice + '</span>';
        if (dice==20) dice = '<span class=\'text-success\'>' + dice + '</span>';
        dice_info += '[' + dice + ']';
        dice_info += dice_value;
    } else if ((new RegExp(/^-[0-9]+$/)).test(dice_value)) { // -1
        let dice = Math.floor(Math.random() * 20) + 1;
        dice_result += dice;
        dice_result += Number(dice_value);
        if (dice==1) dice = '<span class=\'text-danger\'>' + dice + '</span>';
        if (dice==20) dice = '<span class=\'text-success\'>' + dice + '</span>';
        dice_info += '[' + dice + ']';
        dice_info += dice_value;
    } else if ((new RegExp(/^[0-9]+d[0-9]+-[0-9]+$/)).test(dice_value)) {
        let N = Number(dice_value.split('d')[0]);
        for (let i=0; i < N; i++) {
            let dice = Math.floor(Math.random() * Number(dice_value.split('d')[1].split('-')[0])) + 1;
            dice_result += dice;
            if (Number(dice_value.split('d')[1].split('-')[0])==20 && dice==1) {
                dice = '<span class=\'text-danger\'>' + dice + '</span>';
            }
            if (Number(dice_value.split('d')[1].split('-')[0])==20 && dice==20) {
                dice = '<span class=\'text-success\'>' + dice + '</span>';
            }
            dice_info += '[' + dice + ']+';
        }
        dice_result -= Number(dice_value.split('-')[1]);
        console.log(dice_info, dice_value)
        dice_info = dice_info.slice(0, -1);
        dice_info += '-' + dice_value.split('-')[1];
    } else {
        zui.Messager.show('这骰的是啥？');
    }
    
    return '<span class=\'text-primary\'>' + dice_result + '</span>' + dice_info;
}

$(document).ready(function(){
    // 绑定角色选择器
    if (Object.keys(zui.store.getAll()).length > 0) {
        zui.store.each(name => {
            character_selector.add(new Option(name));
        });
        load_data(character_selector.selectedOptions[0].text);
        document.title = character_selector.selectedOptions[0].text;
    }
    character_selector.addEventListener('change', () => {
        load_data(character_selector.selectedOptions[0].text);
        document.title = character_selector.selectedOptions[0].text;
    });

    // 编辑后自动保存
    main_interface_scorll.querySelectorAll('input').forEach(input => {
        if (['race', 'class_name', 'character_name'].includes(input.id)) {
            input.addEventListener("change", () => {
                compute();
                if (race.value!='' && class_name.selectedIndex!=0 && character_name.value!='') {
                    save_data(race.value + class_name.selectedOptions[0].innerText + ': ' + character_name.value);
                    character_selector.innerHTML = '';
                    zui.store.each(name => {
                        character_selector.add(new Option(name));
                    });
                }
            });
        } else {
            input.addEventListener("change", () => {
                compute();
                if (race.value!='' && class_name.selectedIndex!=0 && character_name.value!='') {
                    save_data(race.value + class_name.selectedOptions[0].innerText + ': ' + character_name.value);
                }
            });
        }
    });
    main_interface_scorll.querySelectorAll('select').forEach(select => {
        select.addEventListener("change", () => {
            compute();
            if (race.value!='' && class_name.selectedIndex!=0 && character_name.value!='') {
                save_data(race.value + class_name.selectedOptions[0].innerText + ': ' + character_name.value);
            }
        });
    });

    // 绑定导入按钮
    import_button.addEventListener('click', () => {
        import_input.click();
    });
    import_input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            fileName = file.name.replace(/\.[^/.]+$/, '');
            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    character = JSON.parse(e.target.result);
                    write_sheet();
                    compute();
                    if (race.value!='' && class_name.selectedIndex!=0 && character_name.value!='') {
                        save_data(race.value + class_name.selectedOptions[0].innerText + ': ' + character_name.value);
                    }
                } catch (error) {
                    zui.Messager.show('文件格式不太对啊？');
                    alert('Invalid JSON file!');
                }
            };
            reader.readAsText(file);
        }
    });

    // 绑定导出按钮
    export_button.addEventListener('click', () => {
        read_sheet();
        const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = $('<a>').attr({
            href: url,
            download: race.value + class_name.selectedOptions[0].innerText + character_name.value + '.json'
        });
        a[0].click();
        URL.revokeObjectURL(url);
    });
    
    // 绑定掷骰键
    main_interface_scorll.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", () => {
            if (dice_board.innerHTML != '') dice_board.innerHTML += '<br\>';
            dice_board.innerHTML += button.id.replace('_score', '').replace('_dice', '').replace('hit', 'hit_dice')
                                         .replace('_1_', ' ').replace('_2_', ' ').replace('_3_', ' ')
                                         .replace(/_/g, ' ');
            dice_board.innerHTML += ': ' + roll_dice(button.innerText);
            dice_board.scroll({top: dice_board.scrollHeight, left: 0, behavior: "smooth"});
        });
        Object.defineProperty(button, 'innerText', {
            set(value) {
                if (typeof value === 'number') {
                    this._innerText = value >= 0 ? `+${value}` : value.toString();
                } else {
                    this._innerText = value;
                }
                this.textContent = this._innerText;
            },
            get() {
                return this._innerText;
            }
        });
        
    });

    // 绑定骰盘
    dice_input.addEventListener("keypress", (e) => {
        if (e.keyCode == '13') {
            if (dice_board.innerHTML != '') dice_board.innerHTML += '<br\>';
            dice_board.innerHTML += 'Enter: ' + roll_dice(dice_input.value);
            dice_input.innerText = '';
            dice_board.scroll({top: dice_board.scrollHeight, left: 0, behavior: "smooth"});
        }
    });

    // 绑定护甲列表
    armor_list = [
        ['法师护甲', '野蛮人无甲防御', '武僧无甲防御'],
        ['绵甲', '皮甲', '镶钉皮甲'],
        ['生皮甲', '链甲衫', '鳞甲', '护胸甲', '半身板甲'],
        ['环甲', '锁子甲', '条板甲', '全身板甲']
    ];
    armor_list[armor_type.selectedIndex].forEach((v) => {
        armor_name.add(new Option(v));
    });
    compute(); // 不知道为什么，不这样 AC 就会算错
    write_sheet();
    armor_type.addEventListener('change', () => {
        armor_name.innerHTML = '';
        armor_list[armor_type.selectedIndex].forEach((v) => {
            armor_name.add(new Option(v));
        });
        compute();
        save_data(race.value + class_name.selectedOptions[0].innerText + ': ' + character_name.value);
    });
});
