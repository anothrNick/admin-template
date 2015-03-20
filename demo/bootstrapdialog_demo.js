//bootstrap dialog/modal
function showBootModal(cls)
{
	var dlg = new BootstrapDialog.show({
			type: 'mpl-dialog-'+cls,
			title: 'This is a title',
			message: 'With a message',
			cssClass: 'text-center',
			closable: true
		});
}

function showFullBootModal()
{
	BootstrapDialog.show({
		type: 'type-default',
		title: 'Changing dialog type',
		message: 'Click buttons below...',
		buttons: [{
			label: "A button",
			cssClass: 'btn-default btn-sm',
			action: function(dialogItself){
				dialogItself.close();
			}
		}]
	});
}