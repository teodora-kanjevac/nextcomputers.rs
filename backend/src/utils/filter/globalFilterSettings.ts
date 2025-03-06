export const GLOBAL_FILTERS_TO_EXCLUDE = [
    'Napomena',
    'Pakovanje',
    'Stanje',
    'Dimenzije',
    'Reklamacioni period',
    'Dodatne funkcije',
    'Podržane tehnologije',
    'Ostale osobine',
    'Dodatne mogućnosti',
    'Ostalo',
    'Prava potrošača',
    'Garancija',
    'Uslov za produženu garanciju',
    'Cena',
    'Link proizvođača',
]
export const USAGE_THRESHOLD_PERCENT = 0.4 // Filters must appear in at least 40% of products to be included
export const VALUE_DIVERSITY_THRESHOLD = 20 // Maximum allowed distinct values for a filter; filters with more than 20 distinct values are excluded
export const SINGLE_PRODUCT_VALUE_THRESHOLD = 0.75 // Filters where more than 75% of distinct values are tied to a single product are excluded
export const SUBCATEGORY_FILTER_MAP: Record<number, string[]> = {
    1020: ['Tip', 'Broj jezgara procesora', 'Klasa procesora', 'Proces izrade', 'Grafika'], //CPU
    1028: ['Slot', 'Model', 'Proizvođač čipa', 'Tip memorije', 'Količina memorije'], //GPU
    1021: ['Tip', 'Format', 'Protok', 'Kapacitet diska', 'Keš memorija', 'Broj obrtaja po minutu'], //HDD
    1031: ['Tip hlađenja', 'Tip', 'Broj ventilatora', 'AMD', 'Intel', 'Konektor'], //Kuleri
    1018: [ 'Boja', 'Format kućišta', 'Podržani formati matičnih ploča', 'Maksimalna visina procesorskog hladnjaka', 'Kompatibilnost', ], //Kucista
    1019: [ 'Format', 'Wi-Fi', 'Čipset', 'Bluetooth', 'Tip memorije', 'Broj M.2 slotova', 'Memorijski slotovi', 'Procesorsko ležište (socket)', ], //Maticne
    1001: [ 'Frekventni opseg', 'Standardi', 'Dužina' ], //Mrezna oprema
    1093: [ 'Snaga', 'Format', 'Efikasnost', 'Vrsta kablova' ], //Napajanja
    1011: [ 'Kapacitet', 'Latencija', 'Tip memorije', 'Brzina prenosa podataka', 'Broj modula u pakovanju', 'RGB' ], //RAM
    1003: [ 'Tip', 'Format', 'Kapacitet diska', 'Sekvencionalno čitanje', 'Sekvencionalan upis', 'RGB' ], //SSD
    1008: [ 'Boja', 'Kapacitet', 'Protok' ], //USB
    1016: [ 'Tip', 'Protok', 'SSD', 'Grafika', 'Model grafike', 'Osvežavanje', 'SSD interfejs', 'Memorija (RAM)', 'Klasa procesora', 'Model procesora', 'Rezolucija ekrana', 'Slovni raspored tastera' ], //Laptopovi
    1069: [ 'SSD', 'Gaming', 'Čipset', 'Memorija (RAM)', 'Klasa procesora', 'Grafički procesor', 'Procesorsko ležište (socket)' ], //Racunari
    1009: [ 'Gaming', 'Zvučnici', 'Rezolucija', 'Tip ekrana', 'Odnos stranica', 'Veličina ekrana', 'Vertikalno osvežavanje' ], //Monitori
    1089: [ 'Namena', 'Tip slušalica', 'Tip povezivosti slušalica' ], //Slusalice
    1015: [ 'Tip tastature', 'Osvetljena tastatura', 'Povezivost tastature', 'Slovni raspored tastera', 'Gaming', 'Povezivost miša', 'Boja', 'Tip' ], //Tastature i misevi
    1005: [ 'Rezolucija', 'Tip ekrana', 'Osvežavanje', 'Odnos stranica', 'Veličina ekrana' ], //TV
    1006: [ 'Tip', 'Boja', 'Osvežavanje', 'Odnos stranica', 'Veličina ekrana' ], //Toneri, kertridži, mastila
    1013: [ 'Tip', 'Tip senzora' ], //Skeneri
    1075: [ 'Tip', 'Kapacitet' ], //Memorijske kartice
    1007: [ 'NFC', 'Boja', 'eSIM', '4G (LTE)', 'SIM slot', '5G mreža', 'RAM memorija', 'Interna memorija', 'Interfejs za punjenje' ], //Mobilni
    1047: [ 'Boja', 'Veličina ekrana', 'Rezolucija ekrana', 'Dijagonala ekrana', 'Tip panela', 'RAM memorija', 'Unutrašnja memorija' ], //Tableti
}
