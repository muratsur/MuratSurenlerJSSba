/**
 * 
 */
 function selectAll() {
	var checkboxs = document.getElementsByName('inter');
	for (var i = 0; i < checkboxs.length; i++) {
		if (checkboxs[i].type == 'checkbox') {
			checkboxs[i].checked = true;
		}

	}

}

function unchecked() {
	var checkboxs = document.getElementsByName('inter');
	for (var i = 0; i < checkboxs.length; i++) {
		if (checkboxs[i].type == 'checkbox') {
			checkboxs[i].checked = false;
		}

	}


}



function validate() {
	if (document.carForm.UserType.value == "-1") {
		alert("Please provide your status!");
		return false;
	}
	if (document.carForm.fName.value == "") {
		alert("Please provide your first name!");
		document.carForm.Name.focus();
		return false;
	}
	if (document.carForm.lName.value == "") {
		alert("Please provide your last name!");
		document.carForm.Name.focus();
		return false;
	}
	if (document.carForm.EMail.value == "") {
		alert("Please provide your Email!");
		document.carForm.EMail.focus();
		return false;
	}
	if (document.carForm.Phone.value == "") {
		alert("Please provide your Phone!");
		document.carForm.Phone.focus();
		return false;
	}
	if (document.carForm.Address1.value == "") {
		alert("Please provide your Address!");
		document.carForm.Address1.focus();
		return false;
	}
	if (document.carForm.Address2.value == "") {
		alert("Please provide your Address!");
		document.carForm.Address2.focus();
		return false;
	}

	if (document.carForm.Zip.value == "" || isNaN(document.carForm.Zip.value) ||
		document.carForm.Zip.value.length != 5) {

		alert("Please provide a zip in the format #####.");
		document.carForm.Zip.focus();
		return false;
	}
	if (document.carForm.State.value == "") {
		alert("Please provide your State!");
		document.carForm.State.focus();
		return false;
	}
	if (document.carForm.Country.value == "-1") {
		alert("Please provide your country!");
		return false;
	}
	return (true);
}