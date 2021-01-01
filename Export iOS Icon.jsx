var docRef = app.activeDocument
outputFolder = Folder.selectDialog("Select a folder to output rendered images")


exportOptions = new ExportOptionsSaveForWeb()
exportOptions.format = SaveDocumentType.PNG
exportOptions.transparency = false

function exportAtPxSize(size)
{
    outputFile = File(outputFolder + "/ico_"+size+".png")
    var savedState = app.activeDocument.activeHistoryState
    activeDocument.resizeImage(size, size, activeDocument.resolution, ResampleMethod.AUTOMATIC);
    app.activeDocument.exportDocument(outputFile, ExportType.SAVEFORWEB, exportOptions)
    app.activeDocument.activeHistoryState = savedState
}
exportAtPxSize(20)
exportAtPxSize(29)
exportAtPxSize(40)
exportAtPxSize(58)
exportAtPxSize(60)
exportAtPxSize(76)
exportAtPxSize(80)
exportAtPxSize(87)
exportAtPxSize(120)
exportAtPxSize(152)
exportAtPxSize(167)
exportAtPxSize(180)
exportAtPxSize(1024)
