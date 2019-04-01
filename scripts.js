
//var a = document.getElementById('lista');
//var b = jQuery('#lista');

//console.log(a.innerHTML);
//console.log(b[0].innerHTML);
//console.log(b.html());

//var c = document.getElementById('lista').firstElementChild;
//var d = jQuery('#lista li:first-child');

//var e = jQuery('#lista li:nth-last-child(2)');

//console.log(e.html());

jQuery(document).ready(function() {

	jQuery('#test').click(function(event) {

		event.preventDefault();
		
		//jQuery('#lista li:nth-child(2)').slideToggle(1000, function() { alert('done'); });
		
		jQuery('#lista li:first-child').html('<b>Valoare noua</b>');
		
		jQuery('#test').attr('href', 'http://www.google.ro');
		
		var el1 = jQuery('#lista li:first-child');
		var el2 = el1.next();
		var el3 = el2.next();
		
		$('#lista > li').each(function(index, el) {
		
			if (index % 2 == 0) {
				
				jQuery(el).css('color', 'red');
				
			}
		
		});
		

	});

});

console.log(jQuery('#lista'));
