import VueModel from "../ref/vuemodel.cjs";

export function createModel() {

    var model = new VueModel();

    var formType = model.$meta.addType("Cognito.Forms.Form");

		formType.addProperty("DatePicker1", String, false, false, { label: 'Date Picker 1' });
		formType.addProperty("Spinner1", Number, false, false, { label: 'Spinner 1' });
    formType.addProperty("Name3", String, false, false, { label: 'Name 3' });
    formType.addProperty("Toggle1", Boolean, false, false, { label: 'Toggle 1' });
    formType.addProperty("RatingScale2", Object, false, false, { label: 'Rating Scale 2' });
    formType.addProperty("RatingScale3", Object, false, false, { label: 'Rating Scale 3' });

    var formRepeatingSection1ItemType = model.$meta.addType("Cognito.Forms.FormRepeatingSection1Item");

    formType.addProperty("RepeatingSection1", Cognito.Forms.FormRepeatingSection1Item, true, false, { label: 'Repeating Section 1' });

    formRepeatingSection1ItemType.addProperty("Checkbox1", Boolean, false, false, { label: 'Checkbox 1' });
    formRepeatingSection1ItemType.addProperty("Email1", String, false, false, { label: 'Email 1' });

    var formSection1Type = model.$meta.addType("Cognito.Forms.FormSection1");

    formType.addProperty("Section1", Cognito.Forms.FormSection1, false, false, { label: 'Section 1' });

    formSection1Type.addProperty("Email2", String, false, false, { label: 'Email 2' });
    formSection1Type.addProperty("Email3", String, false, false, { label: 'Email 3' });

    formType.addProperty("Checkbox2", Boolean, false, false, { label: 'Checkbox 2' });
    formType.addProperty("Email4", String, false, false, { label: 'Email 4' });
    formType.addProperty("Name1", String, false, false, { label: 'Name 1' });
    formType.addProperty("Name2", String, false, false, { label: 'Name 2' });

    formType.addProperty("Address1", Object, false, false, { label: 'Address 1' });

    var formEntry = new Cognito.Forms.Form();
    formEntry.Section1 = new Cognito.Forms.FormSection1();
    formEntry.RepeatingSection1.add(new Cognito.Forms.FormRepeatingSection1Item());
    formEntry.RepeatingSection1.add(new Cognito.Forms.FormRepeatingSection1Item());

    model.entry = formEntry;

    function addRepeatingSectionItem(text, nameObj) {
        var name = new Name();
        name.first = nameObj.first;
        name.last = nameObj.last;

        var section = new FormSection();
        section.text = text;
        section.name = name;

        var item = new FormRepeatingSectionItem();
        item.section = section;

        formEntry.items.add(item);
    }

    model.addRepeatingSectionItem = addRepeatingSectionItem;

    return model;
}
