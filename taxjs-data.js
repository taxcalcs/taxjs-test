;
(function () {
    var TaxJsData = /** @class */ (function () {
        function TaxJsData() {
            // HINZUR + WFUNDF: old names
            // F + AF: 2010 + 2013 in upper case
            this.defaultValues = {
                "af": { "default": 0, "type": "number", "name": "Faktorverfahrens", "description": "1, wenn die Anwendung des Faktorverfahrens gewählt wurde (nur in Steuerklasse IV)" },
                "AJAHR": { "default": 0, "type": "number", "name": "64. Lebensjahres folgende Kalenderjahr", "description": "Auf die Vollendung des 64. Lebensjahres folgendes Kalenderjahr (erforderlich, wenn ALTER1=1)" },
                "ALTER1": { "default": 0, "type": "number", "name": "64. Lebensjahr vollendet", "description": "1, wenn das 64. Lebensjahr vor Beginn des Kalenderjahres vollendet wurde, in dem der Lohnzahlungszeitraum endet (§24a EStG), sonst = 0" },
                "ENTSCH": { "default": 0, "type": "big", "name": "Entschädigungen", "description": "In VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent" },
                "f": { "default": 0, "type": "number", "name": "Faktor", "description": "eingetragener Faktor mit drei Nachkommastellen" },
                "JFREIB": { "default": 0, "type": "big", "name": "Jahresfreibetrag", "description": "Jahresfreibetragfür die Ermittlung der Lohnsteür für die sonstigen Bezüge nach Maßgabe der elektronischen Lohnsteuerabzugsmerkmale nach §39e EStG oder der Eintragung auf der Bescheinigung für den Lohnsteuerabzug <year> in Cent (ggf. 0)" },
                "JHINZU": { "default": 0, "type": "big", "name": "Jahreshinzurechnungsbetrag", "description": "Jahreshinzurechnungsbetrag für die Ermittlung der Lohnsteuer für die sonstigen Bezüge nach Maßgabe der elektronischen Lohnsteuerabzugsmerkmale nach §39e EStG oder der Eintragung auf der Bescheinigung für den Lohnsteuerabzug <year> in Cent (ggf. 0)" },
                "JRE4": { "default": 0, "type": "big", "name": "Jahresarbeitslohn", "description": "Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent. Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingaben zu sonstigen Bezügen (Felder SONSTB, VMT oder VKAPA). Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrjährige Tätigkeit aus einem vorangegangenen Abrechnungszeitraum werden in voller Höhe hinzugerechnet." },
                "JRE4ENT": { "default": 0, "type": "big", "name": "Entschädigungen JRE4", "description": "In JRE4 enthaltene Entschädigungen nach §24 Nummer1 EStG in Cent" },
                "JVBEZ": { "default": 0, "type": "big", "name": "Versorgungsbezüge JRE4", "description": "In JRE4 enthaltene Versorgungsbezüge in Cent (ggf. 0)" },
                "KRV": { "default": 0, "type": "number", "name": "Vorsorgepauschale", "description": "Merker für die Vorsorgepauschale 0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung oder einer berufsständischen Versorgungseinrichtung pflichtversichert oderbei Befreiung von der Versicherungspflicht freiwillig versichert; es gilt die allgemeine Beitragsbemessungsgrenze (BBGWest) 1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung oder einer berufsständischen Versorgungseinrichtung pflichtversichert oderbei Befreiung von der Versicherungspflicht freiwillig versichert; es gilt die Beitragsbemessungsgrenze Ost (BBGOst) 2 = wenn nicht 0 oder 1" },
                "KVZ": { "default": 1.3, "type": "big", "name": "Einkommensbezogener Zusatzbeitragssatz", "description": "Kassenindividueller Zusatzbeitragssatz bei einem gesetzlich krankenversicherten Arbeitnehmer in Prozent (bspw.1,30 für 1,30%) mit 2 Dezimalstellen. Es ist der volle Zusatzbeitragssatz anzugeben. Die Aufteilung in Arbeitnehmer- und Arbeitgeberanteil erfolgt im Programmablauf. Siehe i.Ü. auch Erläuterungen unter Pkt. 2.4." },
                "LZZ": { "default": 1, "type": "number", "name": "Lohnzahlungszeitraum", "description": "Lohnzahlungszeitraum: 1 = Jahr 2 = Monat 3 = Woche 4 = Tag" },
                "LZZFREIB": { "default": 0, "type": "big", "name": "Eingetragener Freibetrag", "description": "Der als elektronisches Lohnsteuerabzugsmerkmal für den Arbeitgeber nach §39e EStG festgestellte oder in der Bescheinigung für den Lohnsteuerabzug <year> eingetragene Freibetrag für den Lohnzahlungszeitraum in Cent" },
                "LZZHINZU": { "default": 0, "type": "big", "name": "Eingetragener Hinzurechnungsbetrag", "description": "Der als elektronisches Lohnsteuerabzugsmerkmal für den Arbeitgeber nach §39e EStG festgestellte oder in der Bescheinigung für den Lohnsteuerabzug <year> eingetragene Hinzurechnungsbetrag für den Lohnzahlungszeitraum in Cent" },
                "PKPV": { "default": 0, "type": "big", "name": "Privaten Kranken- bzw. Pflegeversicherung", "description": "Dem Arbeitgeber mitgeteilte Beiträge des Arbeitnehmers für eine private Basiskranken- bzw. Pflege-Pflichtversicherung im Sinne des §10 Absatz 1 Nummer 3 EStG in Cent; der Wert ist unabhängig vom Lohnzahlungszeitraum immer als Monatsbetrag anzugeben" },
                "PKV": { "default": 0, "type": "number", "name": "Krankenversicherung", "description": "0 = gesetzlich krankenversicherte Arbeitnehmer 1 = ausschließlich privat krankenversicherte Arbeitnehmer ohne Arbeitgeberzuschuss 2 = ausschließlich privat krankenversicherte Arbeitnehmer mit Arbeitgeberzuschuss" },
                "PVS": { "default": 0, "type": "number", "name": "Pflegeversicherung in Sachsen", "description": "1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw. zu berücksichtigen wären" },
                "PVZ": { "default": 1, "type": "number", "name": "Zuschlag soziale Pflegeversicherung", "description": "1, wenn der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung zu zahlen hat" },
                "R": { "default": 0, "type": "number", "name": "Religionsgemeinschaft", "description": "Religionsgemeinschaft des Arbeitnehmers lt. elektronischer Lohnsteuerabzugsmerkmale oder der Bescheinigung für den Lohnsteuerabzug <year> (bei keiner Religionszugehörigkeit = 0)" },
                "RE4": { "default": 6000000, "type": "big", "name": "Steuerpflichtiger Arbeitslohn", "description": "Steuerpflichtiger Arbeitslohn für den Lohnzahlungszeitraumvor Berücksichtigung des Versorgungsfreibetrags und des Zuschlags zum Versorgungsfreibetrag, des Altersentlastungsbetrags und des als elektronisches Lohnsteuerabzugsmerkmal festgestellten oder in der Bescheinigung für den Lohnsteuerabzug <year> für den Lohnzahlungszeitraum eingetragenen Freibetrags bzw. Hinzurechnungsbetrags in Cent" },
                "SONSTB": { "default": 0, "type": "big", "name": "Sonstige Bezüge", "description": "Sonstige Bezüge (ohne Vergütung aus mehrjähriger Tätigkeit) einschließlich Sterbegeld bei Versorgungsbezügen sowie Kapitalauszahlungen/Abfindungen, soweit es sich nicht um Bezüge für mehrere Jahre handelt, in Cent (ggf. 0)" },
                "SONSTENT": { "default": 0, "type": "big", "name": "Entschädigungen SONSTB", "description": "In SONSTB enthaltene Entschädigungen nach §24 Nummer1 EStG in Cent" },
                "STERBE": { "default": 0, "type": "big", "name": "Sterbegeld / Kapitalauszahlungen / Abfindungen", "description": "Sterbegeld bei Versorgungsbezügen sowie Kapitalauszahlungen/Abfindungen, soweit es sich nicht um Bezüge für mehrere Jahre handelt (in SONSTB enthalten), in Cent" },
                "STKL": { "default": 1, "type": "number", "name": "Steuerklasse", "description": "Steuerklasse: 1 = I 2 = II 3 = III 4 = IV 5 = V 6 = VI" },
                "VBEZ": { "default": 0, "type": "big", "name": "Versorgungsbezüge RE4", "description": "In RE4 enthaltene Versorgungsbezüge in Cent (ggf. 0) ggf. unter Berücksichtigung einer geänderten Bemessungsgrundlage nach §19 Absatz 2 Satz10 und 11 EStG" },
                "VBEZM": { "default": 0, "type": "big", "name": "Vorsorgungsbezug im Januar 2005", "description": "Versorgungsbezug im Januar 2005 bzw. für den ersten vollen Monat, wenn der Versorgungsbezug erstmalig nach Januar 2005 gewährt wurde, in Cent" },
                "VBEZS": { "default": 0, "type": "big", "name": "Sonderzahlungen", "description": "Voraussichtliche Sonderzahlungen von Versorgungsbezügen im Kalenderjahr des Versorgungsbeginns bei Versorgungsempfängern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen in Cent" },
                "VBS": { "default": 0, "type": "big", "name": "Versorgungsbezüge SONSTB", "description": "n SONSTB enthaltene Versorgungsbezüge einschließlich Sterbegeld in Cent (ggf. 0)" },
                "VJAHR": { "default": 0, "type": "number", "name": "Jahr erstmalig Versorgungsbezug", "description": "Jahr, in dem der Versorgungsbezug erstmalig gewährt wurde; werden mehrere Versorgungsbezüge gezahlt, wird aus Vereinfachungsgründen für die Berechnung das Jahr des ältesten erstmaligen Bezugs herangezogen; auf die Möglichkeit der getrennten Abrechnung verschiedenartiger Bezüge (§39e Absatz5a EStG) wird im Übrigen verwiesen" },
                "VKAPA": { "default": 0, "type": "big", "name": "Kapitalauszahlungen / Abfindungen / Nachzahlungen", "description": "Entschädigungen/Kapitalauszahlungen/Abfindungen/Nachzahlungen bei Versorgungsbezügen für mehrere Jahre in Cent (ggf. 0)" },
                "VMT": { "default": 0, "type": "big", "name": "Vergütung für mehrjährige Tätigkeit", "description": "Entschädigungen und Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen bei Versorgungsbezügen in Cent (ggf. 0)" },
                "ZKF": { "default": 0, "type": "big", "name": "Zahl der Freibeträge für Kinder", "description": "Zahl der Freibeträge für Kinder (eine Dezimalstelle, nur bei Steuerklassen I, II, III und IV)" },
                "ZMVB": { "default": 0, "type": "number", "name": "Monate Versorgungsbezüge", "description": "Zahl der Monate, für die im KalenderjahrVersorgungsbezüge gezahlt werden [nur erforderlich bei Jahresberechnung (LZZ = 1)]" },

                "HINZUR": { "default": 0, "type": "big", "name": "Eingetragener Hinzurechnungsbetrag", "description": "In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag für den Lohnzahlungszeitraum in Cents" },
                "WFUNDF": { "default": 0, "type": "big", "name": "Eingetragener Freibetrag", "description": "In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für den Lohnzahlungszeitraum in Cents" },

                "BK": { "group": "STANDART", "type": "big", "name": "Bemessungsgrundlage Kirchenlohnsteuer", "description": "Bemessungsgrundlage für die Kirchenlohnsteuer in Cent" },
                "BKS": { "group": "STANDART", "type": "big", "name": "Bemessungsgrundlage Kirchenlohnsteuer sonstigen Bezüge", "description": "Bemessungsgrundlage der sonstigen Bezüge (ohne Vergütung für mehrjährige Tätigkeit) für die Kirchenlohnsteuer in Cent" },
                "BKV": { "group": "STANDART", "type": "big", "name": "Bemessungsgrundlage Kirchenlohnsteuer mehrjährige Tätigkeit", "description": "Bemessungsgrundlage der Vergütung für mehrjährige Tätigkeit für die Kirchenlohnsteuer in Cent" },
                "LSTLZZ": { "group": "STANDART", "type": "big", "name": "Lohnsteuer", "description": "Für den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cent" },
                "SOLZLZZ": { "group": "STANDART", "type": "big", "name": "Solidaritätszuschlag", "description": "Für den Lohnzahlungszeitraum einzubehaltender Solidaritätszuschlag in Cent" },
                "SOLZS": { "group": "STANDART", "type": "big", "name": "Solidaritätszuschlag sonstige Bezüge", "description": "Solidaritätszuschlag für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Cent" },
                "SOLZV": { "group": "STANDART", "type": "big", "name": "Solidaritätszuschlag mehrjährige Tätigkeit", "description": "Solidaritätszuschlag für die Vergütung für mehrjährige Tätigkeit in Cent" },
                "STS": { "group": "STANDART", "type": "big", "name": "Lohnsteuer sonstige Bezüge", "description": "Lohnsteuer für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Cent" },
                "STV": { "group": "STANDART", "type": "big", "name": "Lohnsteuer mehrjährige Tätigkeit", "description": "Lohnsteuer für die Vergütung für mehrjährige Tätigkeit in Cent" },
                "VKVLZZ": { "group": "STANDART", "type": "big", "name": "Krankenversicherung / Pflegeversicherung", "description": "Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohnsteuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohnsteuerberechnungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte VKVSONST." },
                "VKVSONST": { "group": "STANDART", "type": "big", "name": "Krankenversicherung / Pflegeversicherung sonstigen Bezügen", "description": "Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert." },

                "VFRB": { "group": "DBA", "type": "big", "name": "Verbrauchter Freibetrag", "description": "Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns, in Cent" },
                "VFRBS1": { "group": "DBA", "type": "big", "name": "Verbrauchter Freibetrag Jahresarbeitslohns", "description": "Verbrauchter Freibetrag bei Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent" },
                "VFRBS2": { "group": "DBA", "type": "big", "name": "Verbrauchter Freibetrag sonstigen Bezüge", "description": "Verbrauchter Freibetrag bei Berechnung der sonstigen Bezüge, in Cent" },
                "WVFRB": { "group": "DBA", "type": "big", "name": "DBA Türkei laufenden Arbeitslohns", "description": "Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag bei der Berechnung deslaufenden Arbeitslohns, in Cent" },
                "WVFRBM": { "group": "DBA", "type": "big", "name": "DBA Türkei sonstigen Bezüge", "description": "Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag bei der Berechnung der sonstigen Bezüge, in Cent" },
                "WVFRBO": { "group": "DBA", "type": "big", "name": "DBA Türkei Jahresarbeitslohns", "description": "Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag bei der Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent" }
            };
        }

        TaxJsData.prototype.normalizeName = function (name) {
            return name === 'F' ? 'f' : name === 'AF' ? 'af' : name;
        };

        TaxJsData.prototype.getDefaultValue = function (name) {
            let n = this.normalizeName(name);
            return this.defaultValues[n] && this.defaultValues[n]["default"] ? this.defaultValues[n]["default"] : 0;
        };

        TaxJsData.prototype.getAllDefaultValues = function () {
            var m = {};
            Object.entries(this.defaultValues).forEach(([key, entry]) => {
                if (entry['default'] !== undefined) {
                    m[key] = entry['default'];
                }
            });
            return m;
        };

        TaxJsData.prototype.getName = function (name) {
            let n = this.normalizeName(name);
            return this.defaultValues[n] && this.defaultValues[n]["name"] ? this.defaultValues[n]["name"] + ' (' + name + ')' : n;
        };

        TaxJsData.prototype.getDescription = function (name, year) {
            let n = this.normalizeName(name);
            return this.defaultValues[n] && this.defaultValues[n]["description"] ? this.defaultValues[n]["description"].replace('<year>', year) : '<...>';
        };
        TaxJsData.prototype.getType = function (name) {
            let n = this.normalizeName(name);
            return this.defaultValues[n] && this.defaultValues[n]["type"] ? this.defaultValues[n]["type"] : 'number';
        };

        TaxJsData.prototype.isDBAOutput = function (name) {
            let n = this.normalizeName(name);
            return this.defaultValues[n] && this.defaultValues[n]["group"] ? this.defaultValues[n]["group"] === "DBA" : false;
        };

        TaxJsData.prototype.getTaxClass = function (year) {
            return 'Lohnsteuer' + year + (year === 2011 ? 'December' : year === 2015 ? 'Dezember' : '') + 'Big';
        };

        return TaxJsData;
    }());
    window.TaxJsData = TaxJsData;
})();
