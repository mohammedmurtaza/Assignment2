function googleTranslateElementInit() {
	new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
  );
}

/* This javascript function translates the current language of the CV (English) to any other languages. 
When viewing the CV, there is a dropdown on top of the page, and when clicking on it, it shows a list of all the languages which can be selected. 
This converts the current language of the CV to the one that has been chosen. I found this javascript code on stackoverflow */
