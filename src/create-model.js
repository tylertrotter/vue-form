/// <reference path="../ref/vuemodel.d.ts" />
import { VueModel } from "./imports";

export function createModel() {

    return new VueModel({
        extendModel: function(model) {

            var formType = model.addType("Cognito.Forms.FormEntry");

            formType.addProperty("DatePicker1", String, false, false, { label: 'Date Picker 1' });
            formType.addProperty("Spinner1", Number, false, false, { label: 'Spinner 1' });
            formType.addProperty("Select1", String, false, false, { label: 'Select 1' });
            formType.addProperty("Name3", String, false, false, { label: 'Name 3' });
            formType.addProperty("Toggle1", Boolean, false, false, { label: 'Toggle 1' });
            formType.addProperty("RatingScale2", Object, false, false, { label: 'Rating Scale 2' });
            formType.addProperty("RatingScale3", Object, false, false, { label: 'Rating Scale 3' });
        
            var formRepeatingSection1ItemType = model.addType("Cognito.Forms.FormEntryRepeatingSection1Item");
        
            formType.addProperty("RepeatingSection1", Cognito.Forms.FormEntryRepeatingSection1Item, true, false, { label: 'Repeating Section 1' });
        
            formRepeatingSection1ItemType.addProperty("Checkbox1", Boolean, false, false, { label: 'Checkbox 1' });
            formRepeatingSection1ItemType.addProperty("Email1", String, false, false, { label: 'Email 1' });

            /*
            formRepeatingSection1ItemType.addRule({
                execute: (entity) => {
                    entity.Checkbox1 = !!entity.Email1;
                },
                onInit: true,
                onChangeOf: ["Email1"],
                returns: ["Checkbox1"]
            });
            formRepeatingSection1ItemType.ctor.$Checkbox1.isCalculated = true;
            */

            var formSection1Type = model.addType("Cognito.Forms.FormEntrySection1");
        
            formType.addProperty("Section1", Cognito.Forms.FormEntrySection1, false, false, { label: 'Section 1' });
        
            formSection1Type.addProperty("Email2", String, false, false, { label: 'Email 2' });
            formSection1Type.addProperty("Email3", String, false, false, { label: 'Email 3' });

            formType.addProperty("Checkbox2", Boolean, false, false, { label: 'Checkbox 2' });
            formType.addProperty("Email4", String, false, false, { label: 'Email 4' });
            formType.addProperty("Name1", String, false, false, { label: 'Name 1' });
            formType.addProperty("Name2", String, false, false, { label: 'Name 2' });
        
            formType.addProperty("Address1", Object, false, false, { label: 'Address 1' });
       
            var formTableType = model.addType("Cognito.Forms.FormEntryTable1");

            formType.addProperty("Table1", Cognito.Forms.FormEntryTable1, false, false, { label: 'Table 1' });
        
            formTableType.addProperty("Text1", String, false, false, { label: 'Text 1' });
            formTableType.addProperty("Toggle2", Boolean, false, false, { label: 'Toggle 2' });
            formTableType.addProperty("Text2", String, false, false, { label: 'Text 2' });
         
        }
    });

}
