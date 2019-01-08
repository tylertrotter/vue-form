/// <reference path="../ref/vuemodel.d.ts" />
import { VueModel } from "./imports";

export function createModel() {

    return new VueModel({
        extendModel: function(model) {

            var formType = model.addType("Cognito.Forms.FormEntry");

						Cognito.Forms.FormEntry = formType.jstype;

						// I don't know, I just need to save this some place.
						Cognito.Forms.currentPage = 2;



						formType.addProperty("Text", String, false, false, { label: 'Text' });
						formType.addProperty("Phone", String, false, false, { label: 'Phone' });

						formType.addProperty("Name1", String, false, false, { label: 'Name' });

						formType.addProperty("ChoiceSelect", String, false, false, { label: 'Choice Drop Down', options: [{value: 'Option A', label: 'Option A'}, {value: 'Option B', label: 'Option B'}]});
						formType.addProperty("ChoiceRadio", String, false, false, { label: 'Choice Radio Buttons' });

						formType.addProperty("ChoiceCheckboxes", Object, false, false, { label: 'Choice Checkboxes' });
						formType.addProperty("Password", String, false, false, { label: 'Password' });

						formType.addProperty("Address", String, false, false, { label: 'Address' });

						formType.addProperty("YesNoRadio", String, false, false, { label: 'YesNo Radio Buttons' });
						formType.addProperty("YesNoCheck", String, false, false, { label: 'YesNo Checkbox' });

						formType.addProperty("Toggle1", Boolean, false, false, { label: 'YesNo Toggle' });
						formType.addProperty("DatePicker1", String, false, false, { label: 'Date' });

						formType.addProperty("Time", String, false, false, { label: 'Time' });
            formType.addProperty("Email4", String, false, false, { label: 'Email' });

						formType.addProperty("SectionText", String, false, false, { label: 'Section Text' });

						formType.addProperty("Signature", String, false, false, { label: 'Signature' });
						formType.addProperty("Textarea", String, false, false, { label: 'Text' });


            formType.addProperty("Name3", String, false, false, { label: 'Name 3' });
            formType.addProperty("Checkbox2", Boolean, false, false, { label: 'Checkbox 2' });

            Cognito.Forms.FormEntry.$Name3.required();
            Cognito.Forms.FormEntry.$Name3.stringLength(3, 100);

            Cognito.Forms.FormEntry.$Email4.stringFormat("Must be an email", "^.+@.+\..+$");
            Cognito.Forms.FormEntry.$Email4.requiredIf({
                isRequired: function() {
                    return this.Name3;
                },
                category: "Error",
                name: "RequiredIfName",
                message: "You must provide an email in order to sign up.",
                onInitNew: true,
                onInitExisting: true,
                onChangeOf: ["Name3", "Email4"]
            });

            Cognito.Forms.FormEntry.$Checkbox2.changed.subscribe(function(e) {
                if (this.Name3) {
                    console.log(this.Name3 + " " + (this.Checkbox2 ? "agrees" : "does not agree") + " to sign up.");
                }
            });

            Cognito.Forms.FormEntry.$Checkbox2.conditionIf({
                isValid: function() {
                    if (!this.Name3) {
                        return;
                    }
                    if (!this.Email4) {
                        return;
                    }
                    return this.Checkbox2;
                },
                category: "Error",
                name: "AgreeToSignUp",
                message: "You must agree to terms in order to sign up.",
                onInitNew: true,
                onInitExisting: true,
                onChangeOf: ["Name3", "Email4", "Checkbox2"]
            });

						formType.addProperty("Spinner1", Number, false, false, { label: 'Spinner 1' });
						formType.addProperty("Slider", Number, false, false, { label: 'Slider' });
            formType.addProperty("Select1", String, false, false, { label: 'Select 1' });
            formType.addProperty("RatingScale2", String, false, false, { label: 'Rating Scale 2' });
            formType.addProperty("RatingScale3", Object, false, false, { label: 'Rating Scale 3' });

            var formRepeatingSection1ItemType = model.addType("Cognito.Forms.FormEntryRepeatingSection1Item");

            Cognito.Forms.FormEntryRepeatingSection1Item = formRepeatingSection1ItemType.jstype;

            formType.addProperty("RepeatingSection1", Cognito.Forms.FormEntryRepeatingSection1Item, true, false, { label: 'Repeating Section 1' });

            Cognito.Forms.FormEntry.$RepeatingSection1.listLength(0, 2);

            formRepeatingSection1ItemType.addProperty("Checkbox1", Boolean, false, false, { label: 'Checkbox 1' });
            formRepeatingSection1ItemType.addProperty("Email1", String, false, false, { label: 'Email 1' });

            Cognito.Forms.FormEntryRepeatingSection1Item.$Checkbox1.calculated({
                calculate: function() {
                    return !!this.Email1;
                },
                onInit: true,
                onChangeOf: ["Email1"]
            });

            var formSection1Type = model.addType("Cognito.Forms.FormEntrySection1");

            Cognito.Forms.FormEntrySection1 = formSection1Type.jstype;

            formType.addProperty("Section1", Cognito.Forms.FormEntrySection1, false, false, { label: 'Section' });

            formSection1Type.addProperty("Email2", String, false, false, { label: 'Email 2' });
            formSection1Type.addProperty("Email3", String, false, false, { label: 'Email 3' });

            formType.addProperty("Name2", String, false, false, { label: 'Name 2' });

            formType.addProperty("Address1", Object, false, false, { label: 'Address 1' });

            var formTableType = model.addType("Cognito.Forms.FormEntryTable1");

            Cognito.Forms.FormEntryTable1 = formTableType.jstype;

            formType.addProperty("Table1", Cognito.Forms.FormEntryTable1, false, false, { label: 'Table 1' });

            formTableType.addProperty("Text1", String, false, false, { label: 'Text 1' });
            formTableType.addProperty("Toggle2", Boolean, false, false, { label: 'Toggle 2' });
            formTableType.addProperty("Text2", String, false, false, { label: 'Text 2' });

            var formSection2Type = model.addType("Cognito.Forms.FormEntrySection2");

            Cognito.Forms.FormEntrySection2 = formSection2Type.jstype;

            formSection2Type.addProperty("OrderDate", Date, false, false, { label: "Date", format: "d" });
            formSection2Type.addProperty("AllSideDishes", String, true, false, { label: "All Side Dishes" });
            formSection2Type.addProperty("SideDish", String, false, false, { label: "Side Dish" });
            formSection2Type.addProperty("Vegetarian", Boolean, false, false, { label: "Vegetarian (V)" });
            formSection2Type.addProperty("GlutenFree", Boolean, false, false, { label: "Gluten Free (GF)" });
            formSection2Type.addProperty("DairyFree", Boolean, false, false, { label: "Dairy Free (DF)" });
            formSection2Type.addProperty("RelevantSideDishes", String, true, false, { label: "Relevant Side Dishes" });

            formType.addProperty("Section2", Cognito.Forms.FormEntrySection2, false, false, { label: 'Section 2', format: "Order of chicken with a side of [SideDish] on [OrderDate]" });

            Cognito.Forms.FormEntrySection2.$SideDish.allowedValues("RelevantSideDishes");

            Cognito.Forms.FormEntrySection2.$OrderDate.calculated({
                calculate: function() {
                    return new Date();
                },
                onInit: true
            });

            Cognito.Forms.FormEntrySection2.$RelevantSideDishes.calculated({
                calculate: function() {
                    var _this = this;
                    return this.AllSideDishes.filter(function(sd) {
                        if (sd === "Vegetable Medley") {
                            // All good!
                        } else if (sd === "Loaded Baked Potato") {
                            if (_this.Vegetarian || _this.DairyFree) {
                                return false;
                            }
                        } else if (sd === "Pita & Hummus") {
                            if (_this.GlutenFree) {
                                return false;
                            }
                        } else if (sd === "Cheesy Grits") {
                            if (_this.DairyFree) {
                                return false;
                            }
                        } else if (sd === "Asparagus") {
                            // All good!
                        }

                        return true;
                    });
                },
                // onInitNew: true,
                // onInitExisting: true,
                onChangeOf: ["Vegetarian", "GlutenFree", "DairyFree"]
            });

        }
    });

}
