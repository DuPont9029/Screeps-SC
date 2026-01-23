#!/bin/bash

# Nome del file di output
OUTPUT_FILE="Screeps-SC.zip"

# Rimuovi il vecchio file se esiste
if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
fi

# Crea il file zip escludendo i file non necessari (come .git, .DS_Store, e lo script stesso)
zip -r "$OUTPUT_FILE" . -x "*.git*" -x "*.DS_Store" -x "pack_extension.sh" -x ".github/*"

echo "Estensione pacchettizzata in $OUTPUT_FILE"
