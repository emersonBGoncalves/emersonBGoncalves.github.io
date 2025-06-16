@echo off
echo Instalando dependencias...
winget install chrome

echo Gerando PDF EN...

set HTML_PATH=C:\Users\Trabalho\Documents\Pessoais\emersonBGoncalves.github.io\curriculoen.html
set PDF_PATH=C:\Users\Trabalho\Documents\Pessoais\emersonBGoncalves.github.io\curriculoen.pdf

start chrome --headless --disable-gpu --no-sandbox --virtual-time-budget=10000 --print-to-pdf="%PDF_PATH%" "file:///%HTML_PATH%"
echo PDF EN gerado em %PDF_PATH%

echo Gerando PDF PT...

set HTML_PT_PATH=C:\Users\Trabalho\Documents\Pessoais\emersonBGoncalves.github.io\curriculopt.html
set PDF_PT_PATH=C:\Users\Trabalho\Documents\Pessoais\emersonBGoncalves.github.io\curriculopt.pdf

start chrome --headless --disable-gpu --no-sandbox --virtual-time-budget=10000 --print-to-pdf="%PDF_PT_PATH%" "file:///%HTML_PT_PATH%"
echo PDF PT gerado em %PDF_PT_PATH%