````markdown
# Sorting Algorithm Visualizer

Dies ist ein interaktives Visualisierungstool für verschiedene Sortieralgorithmen, geschrieben in **JavaScript** unter Verwendung von **p5.js**.

## Funktionen

- Visualisiert die folgenden Sortieralgorithmen:
  - Bubblesort
  - Insertionsort
  - Selectionsort
  - Binary Insertionsort
  - Radixsort (noch nicht implementiert)
- Interaktive Steuerung:
  - Linke Maustaste: Wechsel zwischen den Algorithmen
  - Rechte Pfeiltaste: Liste neu mischen und Sortierung zurücksetzen
- Anzeige von:
  - Anzahl der Elemente
  - Anzahl der Veränderungen/Swaps
  - Aktuell aktiver Algorithmus

## Installation

1. Stelle sicher, dass du **p5.js** einbindest. Zum Beispiel über CDN in deiner HTML-Datei:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
<script src="sketch.js"></script>
```

2. Speichere den obigen Code in einer Datei, z. B. `sketch.js`.

3. Öffne die HTML-Datei in einem Browser.

## Steuerung

* **Linke Maustaste**: Wechselt zwischen den Sortieralgorithmen
* **Rechte Pfeiltaste**: Setzt die Liste zurück und mischt sie neu
* Die Elemente werden vertikal angezeigt, die Farben repräsentieren die Werte.

## Code-Struktur

* `setup()`: Initialisiert das Canvas und die Liste
* `draw()`: Haupt-Loop, ruft `show()`, `algorithms()` und `showtext()` auf
* `show()`: Zeichnet die Balken auf dem Canvas
* `showtext()`: Zeigt Statusinformationen an
* `shuffle()`: Mischt das Array zufällig
* `resetstats()`: Setzt den Zähler der Veränderungen und die Sortierung zurück
* `mousePressed()` und `keyPressed()`: Steuern die Interaktionen
* Sortierfunktionen:

  * `bubbleSort(a)`
  * `insertionSort(a)`
  * `selectionSort(a)`
  * `binaryinsertionSort(a)`
  * `radixSort(a)` (Platzhalter)

## Hinweise

* Radixsort ist noch nicht implementiert.
* Die Funktion `sleep(ms)` wird im Code verwendet, ist aber ineffizient und blockiert den Browser.
````
