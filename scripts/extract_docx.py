from docx import Document
from pathlib import Path
import json

files = [
    r"C:\Users\femzy\Downloads\files\PP10_Tax_Reform.docx",
    r"C:\Users\femzy\Downloads\files\PP12_Economic_Stability_Confidence.docx",
    r"C:\Users\femzy\Downloads\files\PP11_Debt_Restructuring.docx",
    r"C:\Users\femzy\Downloads\files\Nigeria_EES_Policy_Compendium.docx",
    r"C:\Users\femzy\Downloads\files\PP01_EES_CFAR_FX_Stability.docx",
    r"C:\Users\femzy\Downloads\files\PP02_FAAC_Reform.docx",
    r"C:\Users\femzy\Downloads\files\PP03_Revenue_Diversification.docx",
    r"C:\Users\femzy\Downloads\files\PP04_Monetary_Policy_CBN.docx",
    r"C:\Users\femzy\Downloads\files\PP05_State_Fiscal_Autonomy.docx",
    r"C:\Users\femzy\Downloads\files\PP06_Trade_AfCFTA.docx",
    r"C:\Users\femzy\Downloads\files\PP07_Pension_Workers_Wealth.docx",
    r"C:\Users\femzy\Downloads\files\PP08_Infrastructure_Financing.docx",
    r"C:\Users\femzy\Downloads\files\PP09_SME_Capital_Access.docx",
]

output = {}
for p in files:
    path = Path(p)
    if not path.exists():
        # try globbing
        matches = list(path.parent.glob(path.name + '*')) if path.parent.exists() else []
        if matches:
            path = matches[0]
    try:
        doc = Document(str(path))
        paragraphs = [par.text.strip() for par in doc.paragraphs if par.text.strip()]
        full = "\n\n".join(paragraphs)
        short = "\n\n".join(paragraphs[:8])
        output[path.name] = {
            'full_text': full,
            'summary': short[:2000]
        }
    except Exception as e:
        output[path.name if path else p] = {'error': str(e)}

out_path = Path(r"c:\Users\Public\Documents\portfolio\akinloye\src\pages\technocracy_sources.json")
out_path.write_text(json.dumps(output, ensure_ascii=False, indent=2))
print('WROTE', out_path)
