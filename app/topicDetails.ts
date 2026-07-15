export interface TopicDetail {
  title: string;
  subtitle?: string;
  intro: string;
  definitionTitle?: string;
  definitionText?: string;
  benefitsTitle?: string;
  benefits?: string[];
  eligibilityTitle?: string;
  eligibility?: string[];
  requirementsTitle?: string;
  requirements?: string[];
  documentsTitle?: string;
  documents?: string[];
  processTitle?: string;
  process?: string[];
  compliancesTitle?: string;
  compliances?: string[];
  timeline?: string;
  whyChooseUs?: string[];
  beyondTitle?: string;
  beyondItems?: string[];
}

export const topicDetailsMap: Record<string, TopicDetail> = {
  // "-"- STARTUP REGISTRATION "-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-
  "private limited company registration": {
    title: "Private Limited Company Registration",
    subtitle: "Starting a business in India? Register your Private Limited Company quickly and hassle-free. Expert-led incorporation services with complete compliance and support.",
    intro: "A Private Limited Company is a separate legal entity registered under the Companies Act, 2013 - legally distinct from its owners, with shareholders enjoying limited liability.",
    definitionTitle: "What is a Private Limited Company?",
    definitionText: "A Private Limited Company is a separate legal entity registered under the Companies Act, 2013. This means: The company is legally separate from its owners; Shareholders have limited liability; It can own property, enter contracts, and sue or be sued.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Limited Liability Protection: Your personal assets are protected from business risks.",
      "Separate Legal Identity: The company continues even if ownership changes.",
      "Better Credibility: Preferred by investors, banks, and clients.",
      "Easy Fundraising: Equity investment and venture capital funding possible.",
      "Perpetual Succession: Business continues irrespective of directors/shareholders."
    ],
    requirementsTitle: "Requirements for Incorporation",
    requirements: [
      "Minimum 2 Directors",
      "Minimum 2 Shareholders (can be same as directors)",
      "One Registered Office Address in India",
      "Valid Identity & Address Proof of directors",
      "Digital Signature Certificate (DSC)",
      "Director Identification Number (DIN)"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card of Directors",
      "Aadhaar / Passport / Voter ID",
      "Address Proof (Bank Statement / Utility Bill)",
      "Passport size photographs",
      "Registered office proof (Rent Agreement / Ownership Proof + NOC)"
    ],
    timeline: "Typically 10 working days, subject to approvals",
    whyChooseUs: [
      "Expert guidance from qualified professionals",
      "End-to-end documentation support",
      "Quick turnaround time",
      "Transparent pricing",
      "Post-incorporation compliances support"
    ],
    beyondTitle: "Beyond Incorporation?",
    beyondItems: [
      "GST Registration",
      "ROC Compliance",
      "Accounting & Tax Advisory",
      "Shareholding Structuring",
      "Legal Documentation"
    ]
  },

  "one person company registration": {
    title: "One Person Company Registration",
    subtitle: "Build Your Business - Independently, Professionally. For solo entrepreneurs who want complete control without compromising on credibility.",
    intro: "Incorporate your business with ease while enjoying the benefits of a corporate entity - all managed by a single owner.",
    definitionTitle: "What is a One Person Company?",
    definitionText: "A One Person Company (OPC) is a business structure introduced under the Companies Act, 2013 that allows a single individual to operate as a company with limited liability. It combines the simplicity of a sole proprietorship with the advantages of a private limited company.",
    benefitsTitle: "Key Benefits of OPC",
    benefits: [
      "Single Ownership: Full control over business decisions.",
      "Limited Liability Protection: Your personal assets remain protected.",
      "Separate Legal Identity: The company is distinct from the owner.",
      "Better Credibility: More professional than a sole proprietorship.",
      "Perpetual Succession: Nominee ensures continuity in case of unforeseen events."
    ],
    eligibilityTitle: "Eligibility Criteria",
    eligibility: [
      "Only 1 Director & 1 Shareholder (same person)",
      "Must be an Indian resident",
      "Nominee is mandatory",
      "Cannot carry out NBFC or investment activities"
    ],
    timeline: "Typically 10 working days, subject to approvals",
    whyChooseUs: [
      "Expert guidance from qualified professionals",
      "End-to-end documentation support",
      "Quick turnaround time",
      "Transparent pricing",
      "Post-incorporation compliances support"
    ],
    beyondTitle: "Beyond Incorporation?",
    beyondItems: [
      "GST Registration",
      "ROC Compliance",
      "Accounting & Tax Advisory",
      "Shareholding Structuring",
      "Legal Documentation"
    ]
  },

  "limited liability partnership registration": {
    title: "LLP (Limited Liability Partnership) Incorporation",
    subtitle: "Starting a business in India? An LLP is one of the most preferred business structures for startups, professionals, and small businesses.",
    intro: "A Limited Liability Partnership combines the flexibility of a partnership with the benefits of limited liability and separate legal identity.",
    definitionTitle: "What is an LLP?",
    definitionText: "An LLP is a legal business structure where partners have limited liability (personal assets are protected), it has a separate legal identity, and it offers less compliance compared to a Private Limited Company.",
    benefitsTitle: "Key Features & Benefits",
    benefits: [
      "Separate Legal Entity: Unique identity distinct from partners.",
      "Limited Risk: Partners are not personally liable for business debts.",
      "Cost-Effective: Lower registration and compliance costs.",
      "Easy Compliance: No mandatory audit unless turnover exceeds prescribed limits.",
      "Flexibility: Partners can decide internal structure through LLP Agreement.",
      "No Minimum Capital Requirement: Start with any amount."
    ],
    eligibilityTitle: "Who Should Choose LLP?",
    eligibility: [
      "Professionals and Consultants",
      "Small & Medium Businesses",
      "Family-owned businesses",
      "Startups with low investment"
    ],
    requirementsTitle: "Requirements for LLP Registration",
    requirements: [
      "Minimum 2 Partners (no upper limit)",
      "At least 1 Designated Partner must be a resident of India",
      "Valid Registered Office Address",
      "Digital Signature Certificate (DSC)",
      "DPIN (Designated Partner Identification Number)"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card of all Partners",
      "Aadhaar Card / Passport / Voter ID / Driving License",
      "Passport-size Photograph of each Partner",
      "Electricity Bill / Utility Bill (Registered Office)",
      "Rent Agreement (if rented) + NOC from Owner"
    ],
    processTitle: "LLP Incorporation Process",
    process: [
      "Obtain DSC for all Partners",
      "Apply for DPIN (Designated Partner Identification Number)",
      "Name Reservation through RUN-LLP",
      "Filing of Incorporation Form (FiLLiP)",
      "Issue of Certificate of Incorporation"
    ],
    compliancesTitle: "Post-Incorporation Compliances",
    compliances: [
      "Drafting & Filing of initial LLP Agreement within 30 days",
      "Annual Return - Form 11",
      "Statement of Accounts - Form 8",
      "Income Tax Return Filing"
    ],
    whyChooseUs: [
      "Quick & Hassle-Free Process",
      "Expert Professional Support",
      "Transparent Pricing",
      "End-to-End Assistance"
    ]
  },

  "sole proprietorship registration": {
    title: "Sole Proprietorship Registration",
    subtitle: "The simplest and most affordable business structure for individual entrepreneurs starting out.",
    intro: "A sole proprietorship is an unincorporated business owned and run by one individual. While there is no formal company registration, various licenses and registrations are required to operate legally.",
    definitionTitle: "What is a Sole Proprietorship?",
    definitionText: "A Sole Proprietorship is a business structure where one person owns and operates the business. It is the easiest and cheapest form of business but does not offer limited liability protection - the owner is personally liable for all debts.",
    benefitsTitle: "Key Advantages",
    benefits: [
      "Simplest business form - minimal compliance",
      "Low setup and operational costs",
      "Complete control over all business decisions",
      "All profits go directly to the owner",
      "Easy to dissolve if needed"
    ],
    requirementsTitle: "Common Registrations Required",
    requirements: [
      "GST Registration (if applicable by turnover)",
      "Shop & Establishment Act License",
      "MSME / Udyam Registration",
      "Professional Tax Registration (state-specific)",
      "Trade License from local municipality"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card of Proprietor",
      "Aadhaar Card",
      "Address Proof (bank statement / utility bill)",
      "Business address proof (rent agreement / ownership)",
      "Passport-size photograph"
    ],
    whyChooseUs: [
      "Fast registration assistance",
      "GST & MSME bundled support",
      "Expert guidance on applicable licenses",
      "Transparent pricing"
    ]
  },

  // "-"- GST "-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-
  "gst registration": {
    title: "GST Registration",
    subtitle: "GST is a unified indirect tax system in India replacing multiple taxes such as VAT, Service Tax, and Excise Duty.",
    intro: "Get GST registered legally and start claiming input tax credit with a unique GSTIN issued by the government.",
    definitionTitle: "What is GST Registration?",
    definitionText: "GST registration is mandatory once a business crosses the prescribed turnover limit or engages in certain specified activities. After registration, a unique GSTIN (Goods and Services Tax Identification Number) is issued, allowing the business to legally collect tax and claim input tax credit.",
    eligibilityTitle: "Who Needs GST Registration?",
    eligibility: [
      "Businesses exceeding the turnover threshold limit",
      "Inter-state suppliers of goods or services",
      "E-commerce sellers and operators",
      "Casual taxable persons",
      "Input Service Distributors (ISD)",
      "Businesses liable under reverse charge mechanism",
      "Non-resident taxable persons"
    ],
    requirementsTitle: "Turnover Threshold",
    requirements: [
      "'40 lakhs - For goods suppliers (in most states)",
      "'20 lakhs - For service providers",
      "'10 lakhs - For special category states"
    ],
    benefitsTitle: "Types of GST Registration",
    benefits: [
      "Regular GST Registration",
      "Composition Scheme Registration",
      "Casual Taxable Person Registration",
      "Non-Resident Taxable Person Registration",
      "Input Service Distributor (ISD)"
    ],
    compliancesTitle: "Post-Registration Compliance",
    compliances: [
      "Filing of GST Returns (monthly/quarterly)",
      "Maintenance of proper records",
      "Issuance of GST-compliant invoices",
      "Payment of tax liability on time"
    ]
  },

  "gst return filing": {
    title: "GST Returns Filing Services",
    subtitle: "Stay stress-free with expert GST return filing services. From monthly returns to annual compliance, we ensure accuracy, timeliness, and complete peace of mind.",
    intro: "Detailed guide to GST Return Forms, Due Dates, and the QRMP scheme.",
    definitionTitle: "GSTR Forms and Due Dates",
    definitionText: "All regular taxpayers must report their sales and purchases on the GST Portal. Below are the key forms with filing frequency and due dates.",
    benefitsTitle: "Key GST Returns & Due Dates",
    benefits: [
      "GSTR-1 (Outward Sales): Monthly by 11th, or Quarterly by 13th (QRMP Scheme).",
      "GSTR-3B (Summary & Payment): Monthly by 20th, or Quarterly by 22nd/24th (QRMP).",
      "GSTR-6 (ISD): Monthly by 13th of the following month.",
      "GSTR-7 (TDS): Monthly by 10th of the following month.",
      "GSTR-8 (TCS E-commerce): Monthly by 10th of the following month.",
      "GSTR-9 (Annual Return): By 31st December following the financial year.",
      "GSTR-9C (Reconciliation Statement): By 31st December following the financial year."
    ],
    eligibilityTitle: "What is the QRMP Scheme?",
    eligibility: [
      "QRMP = Quarterly Return Monthly Payment Scheme",
      "Eligible if turnover is up to '5 crore",
      "File returns quarterly (4 times/year instead of 12)",
      "Pay tax monthly via PMT-06 challan by 25th of next month",
      "GSTR-1 (Quarterly): 13th of month after quarter end",
      "GSTR-3B (Quarterly): 22nd or 24th depending on state (Cat X or Y)"
    ]
  },

  "annual return filing": {
    title: "Annual Return Filing (GSTR-9)",
    subtitle: "Mandatory annual reconciliation of all GST transactions filed during the financial year.",
    intro: "GSTR-9 is an annual return to be filed by registered taxpayers summarizing all inward and outward supplies, ITC claimed, and taxes paid.",
    definitionTitle: "What is GSTR-9?",
    definitionText: "GSTR-9 is an annual return consolidating all monthly or quarterly returns filed during the financial year. It reconciles sales, purchases, ITC, and tax payments declared in GSTR-1 and GSTR-3B.",
    benefitsTitle: "Key Components of GSTR-9",
    benefits: [
      "Details of outward supplies (sales) during the year",
      "Details of inward supplies (purchases) and ITC claimed",
      "Tax paid during the year (CGST, SGST, IGST)",
      "Reconciliation of ITC declared vs. books",
      "HSN-wise summary of outward supplies"
    ],
    requirementsTitle: "Who Must File & Due Date",
    requirements: [
      "All registered taxpayers (excluding composition dealers - file GSTR-9A)",
      "Due Date: 31st December following the end of the financial year",
      "GSTR-9C (Reconciliation Statement) required if turnover exceeds '5 crore"
    ]
  },

  "gst registration cancellation": {
    title: "GST Registration Cancellation",
    subtitle: "Form GST REG-16 filing services to safely cancel your GSTIN without penalties.",
    intro: "Professional guidance to close your GST registration safely, including filing pending returns and a final GSTR-10.",
    definitionTitle: "Scope of Services",
    definitionText: "Our services cover: preparation and filing of Form GST REG-16, advisory on closing stock and ITC reversal, review and filing of pending returns (GSTR-1, GSTR-3B), preparation and filing of Final Return (GSTR-10), and basic support in responding to department queries.",
    requirementsTitle: "GST Returns Filing Before Cancellation",
    requirements: [
      "File all pending GST returns (GSTR-1, GSTR-3B, etc.)",
      "Clear all tax liabilities, interest, and late fees",
      "Note: GST Cancellation will not be processed if returns are pending."
    ],
    benefits: [
      "Full compliance evaluation before strike off",
      "Avoid post-cancellation department notices",
      "File final GSTR-10 within 3 months of cancellation order"
    ]
  },

  // "-"- INCOME TAX "-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-"-
  "income tax return filing": {
    title: "Income Tax Return (ITR) Filing",
    subtitle: "Mandatory compliance for individuals, businesses, and other entities earning income in India.",
    intro: "Timely and accurate ITR filing ensures compliance, avoids penalties, and enables taxpayers to claim refunds and carry forward losses.",
    definitionTitle: "Who Should File ITR?",
    definitionText: "ITR filing is mandatory for individuals earning income above the basic exemption limit, all companies and LLPs (mandatory irrespective of income), firms/AOPs/BOIs, individuals with foreign assets or income, and persons claiming tax refunds.",
    benefitsTitle: "Types of ITR Forms",
    benefits: [
      "ITR-1 (Sahaj): Salaried individuals, one house property, income up to 50 lakh.",
      "ITR-2: Individuals/HUFs without business income - capital gains, foreign income.",
      "ITR-3: Individuals/HUFs with business or professional income.",
      "ITR-4 (Sugam): Presumptive taxation scheme (44AD, 44ADA, 44AE).",
      "ITR-5: Firms, LLPs, AOPs, BOIs.",
      "ITR-6: Companies (except Section 11 exemptions).",
      "ITR-7: Trusts, NGOs, entities under Sections 139(4A) to 139(4D)."
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card and Aadhaar Card",
      "Form 16 / Salary Slips (for salaried individuals)",
      "Bank Statements for the financial year",
      "Interest Certificates (FD, savings account)",
      "Capital Gains Statements",
      "Investment Proofs (80C, 80D, etc.)",
      "Business / Professional financials (if applicable)"
    ],
    requirementsTitle: "Due Dates for ITR Filing",
    requirements: [
      "Individuals (Non-audit cases): 31st July",
      "Businesses requiring audit: 31st October",
      "Transfer Pricing cases: 30th November",
      "(Subject to extension by the Income Tax Department)"
    ]
  },

  "form 15ca and 15cb": {
    title: "Form 15CA and 15CB - Foreign Remittance Compliance",
    subtitle: "When making payments to a non-resident or foreign entity, compliance with the Income Tax Act, 1961 is mandatory.",
    intro: "Form 15CA and 15CB are essential documents ensuring appropriate taxes are deducted at source (TDS) on foreign remittances.",
    definitionTitle: "What are Form 15CA and 15CB?",
    definitionText: "Form 15CA is a self-declaration form submitted online by the remitter (payer) before making a foreign remittance. Form 15CB is a certificate issued by a Chartered Accountant certifying the nature of remittance, applicability of tax under Indian law, rate of TDS, and compliance with DTAA if applicable.",
    eligibilityTitle: "When are They Required?",
    eligibility: [
      "Form 15CB required: Payment is taxable in India AND remittance exceeds 5,00,000 in a financial year.",
      "Only Form 15CA (Part D): Remittance is not taxable in India.",
      "Form 15CA (Part A): Small remittances up to 5 lakh.",
      "Form 15CA (Part B): When order/certificate under Section 195(2)/(3)/(197) is obtained.",
      "Form 15CA (Part C): When Form 15CB is required."
    ],
    requirementsTitle: "Documents Required",
    requirements: [
      "PAN of remitter",
      "Details of remittance (invoice/agreement)",
      "Bank details (Form A2)",
      "TRC (Tax Residency Certificate) of recipient - if DTAA benefit claimed",
      "Lower/nil deduction certificate (if available)"
    ],
    benefitsTitle: "Our Scope of Services",
    benefits: [
      "Examination of remittance nature and taxability",
      "DTAA analysis and tax rate determination",
      "TDS calculation and advisory",
      "Preparation and issuance of Form 15CB",
      "Filing of Form 15CA on the Income Tax portal",
      "Coordination with banks for smooth remittance",
      "Advisory on FEMA and RBI compliance"
    ],
    compliancesTitle: "Common Transactions Covered",
    compliances: [
      "Import of services",
      "Royalty and technical fees",
      "Commission payments to foreign agents",
      "Foreign investments and repatriation",
      "Interest payments to overseas lenders",
      "Software purchases from foreign vendors"
    ]
  },

  "form 26q - tds on non-salary": {
    title: "TDS Return Filing - Form 26Q",
    subtitle: "Quarterly TDS return statement for payments made to residents (other than salary) under the Income Tax Act, 1961.",
    intro: "Timely and accurate filing of Form 26Q ensures compliance and avoids penalties, notices, and disallowances.",
    definitionTitle: "What is Form 26Q?",
    definitionText: "Form 26Q is a quarterly statement of TDS deducted on payments other than salary made to residents. It includes deductor details, deductee details and PAN, nature of payment, and TDS amount deducted and deposited.",
    eligibilityTitle: "Applicable Sections for Deduction",
    eligibility: [
      "Section 194C - Contractor payments",
      "Section 194J - Professional / technical fees",
      "Section 194I - Rent payments",
      "Section 194H - Commission / brokerage",
      "Section 194A - Interest (other than on securities)"
    ],
    requirementsTitle: "Due Dates for Filing Form 26Q",
    requirements: [
      "Q1 (April - June): 31st July",
      "Q2 (July - September): 31st October",
      "Q3 (October - December): 31st January",
      "Q4 (January - March): 31st May"
    ]
  },

  "form 24q - tds on salary": {
    title: "TDS Return Filing - Form 24Q",
    subtitle: "Quarterly TDS return filed for tax deducted on salary payments to employees under Section 192.",
    intro: "Accurate filing ensures proper credit of TDS in employees Form 26AS and avoids compliance issues.",
    definitionTitle: "What is Form 24Q?",
    definitionText: "Form 24Q is a quarterly statement of TDS deducted on salaries. It includes employer and employee details, PAN of employees, salary structure, exemptions, deductions, and TDS deducted.",
    eligibilityTitle: "Who is Required to File?",
    eligibility: [
      "Every employer (company, firm, LLP, or individual liable to deduct TDS)",
      "Mandatory if salaries are paid and TDS is deducted under Section 192",
      "Requires Annexure I (all quarters) and Annexure II (Q4 only)"
    ],
    requirementsTitle: "Due Dates for Filing Form 24Q",
    requirements: [
      "Q1 (April - June): 31st July",
      "Q2 (July - September): 31st October",
      "Q3 (October - December): 31st January",
      "Q4 (January - March): 31st May"
    ]
  },

  "form 26qb - tds on property purchase": {
    title: "TDS on Property Purchase - Form 26QB",
    subtitle: "Challan-cum-statement for depositing TDS on the purchase of immovable property under Section 194-IA.",
    intro: "When a buyer purchases property from a resident seller for 50 lakh or more, TDS must be deducted and deposited using Form 26QB.",
    definitionTitle: "When does Section 194-IA Apply?",
    definitionText: "TDS under Section 194-IA applies when property value is 50 lakh or more, seller is a resident of India. TDS rate is 1% of the sale consideration, or 20% if sellers PAN is not available.",
    requirementsTitle: "Responsibility and Due Date",
    requirements: [
      "The buyer (transferee) is responsible for deducting TDS, filing Form 26QB, and depositing tax.",
      "Must be filed within 30 days from the end of the month in which TDS is deducted."
    ],
    processTitle: "Filing Process",
    process: [
      "Calculate 1% of total sale consideration",
      "Fill Form 26QB online on the Income Tax portal",
      "Deposit TDS via net banking / challan",
      "Generate acknowledgment receipt",
      "Download Form 16B from TRACES",
      "Issue Form 16B to the seller"
    ]
  },

  "form 26qc - tds on rent": {
    title: "TDS on Rent - Form 26QC",
    subtitle: "Challan-cum-statement for depositing TDS on high-value rent under Section 194-IB of the Income Tax Act, 1961.",
    intro: "Simplifies compliance for individuals or HUFs not required to obtain TAN but still needing to deduct TDS on high-value rent payments.",
    definitionTitle: "When is Form 26QC Applicable?",
    definitionText: "Section 194-IB applies when rent exceeds 50,000 per month, tenant is an individual or HUF (not liable for tax audit), and payment is made to a resident landlord. TDS rate is 5%.",
    requirementsTitle: "Process and Due Date",
    requirements: [
      "File within 30 days from the end of the month in which TDS is deducted.",
      "TDS is deducted at the time of last months rent or at time of vacating the property.",
      "Tenant must issue Form 16C to the landlord within 15 days of filing."
    ],
    processTitle: "Filing Process",
    process: [
      "Calculate total rent paid during the year",
      "Deduct TDS @ 5%",
      "Fill Form 26QC online on Income Tax portal",
      "Deposit TDS via net banking / challan",
      "Generate acknowledgment receipt",
      "Download Form 16C from TRACES",
      "Issue Form 16C to the landlord"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN of tenant and landlord",
      "Rental agreement",
      "Property address details",
      "Rent amount and duration",
      "Bank payment details"
    ]
  },

  "form 26qd - tds on high-value payments": {
    title: "TDS on High-Value Payments - Form 26QD",
    subtitle: "Challan-cum-statement for depositing TDS under Section 194M of the Income Tax Act, 1961.",
    intro: "For individuals or HUFs making payments exceeding 50 lakh for contract work, professional services, or commission/brokerage to residents.",
    definitionTitle: "What is Section 194M?",
    definitionText: "Section 194M requires individuals or HUFs to deduct TDS at 5% on payments exceeding 50 lakh in a financial year to resident contractors, professionals, or commission agents. If PAN is not available, TDS rate is 20%.",
    eligibilityTitle: "Covered Payments",
    eligibility: [
      "Contract work (Section 194C type)",
      "Professional services (Section 194J type)",
      "Commission or brokerage (Section 194H type)"
    ],
    requirementsTitle: "Responsibility and Due Date",
    requirements: [
      "The payer is responsible for deducting TDS, filing Form 26QD, and depositing tax.",
      "Must be filed within 30 days from the end of the month in which TDS is deducted.",
      "Issue Form 16D to the payee within 15 days of filing."
    ],
    processTitle: "Filing Process",
    process: [
      "Determine applicability under Section 194M",
      "Deduct TDS @ 5%",
      "Fill Form 26QD online on Income Tax portal",
      "Deposit TDS via net banking / challan",
      "Generate acknowledgment receipt",
      "Download Form 16D from TRACES",
      "Issue Form 16D to the payee"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN of payer and payee",
      "Nature of payment",
      "Payment details and amount",
      "Agreement or invoice (if available)"
    ]
  },

  "tax audit": {
    title: "Tax Audit - Section 44AB",
    subtitle: "Mandatory compliance requirement for businesses and professionals crossing prescribed turnover or receipt limits under the Income Tax Act, 1961.",
    intro: "The objective of a tax audit is to ensure accuracy of financial records, proper reporting of income, and compliance with tax laws.",
    definitionTitle: "What is a Tax Audit?",
    definitionText: "A tax audit is an examination of books of accounts conducted by a Chartered Accountant to verify accuracy of financial statements and proper compliance with income tax provisions. The audit report is submitted in Form 3CA / 3CB along with Form 3CD.",
    eligibilityTitle: "Applicability of Tax Audit",
    eligibility: [
      "Businesses: Turnover exceeds 1 crore (or 10 crore if cash transactions within limits)",
      "Professionals: Gross receipts exceed 50 lakh",
      "Presumptive Taxation: Income declared lower than prescribed rate under Section 44AD, 44ADA, or 44AE"
    ],
    benefitsTitle: "Tax Audit Forms",
    benefits: [
      "Form 3CA - Where accounts are already audited under another law",
      "Form 3CB - Where no other audit is conducted",
      "Form 3CD - Detailed statement of particulars"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Books of accounts (ledger, cash book, journal)",
      "Financial statements (P and L, Balance Sheet)",
      "Bank statements for the financial year",
      "GST returns",
      "Invoices and expense records",
      "TDS details and returns",
      "Previous year audit reports"
    ],
    timeline: "Due Date: Generally 30th September of the assessment year"
  },

  "statutory audit": {
    title: "Statutory Audit Services",
    subtitle: "Mandatory independent audit of financial statements required under the Companies Act, 2013.",
    intro: "Statutory audit ensures that a company financial records present a true and fair view of its financial position.",
    definitionTitle: "What is a Statutory Audit?",
    definitionText: "A statutory audit is an independent examination of financial statements to verify accuracy and completeness of accounts, compliance with applicable laws and accounting standards, proper disclosure of financial information, and detection of frauds or irregularities.",
    eligibilityTitle: "Applicability",
    eligibility: [
      "All companies registered under the Companies Act, 2013 (Private Limited, Public Limited, OPC)",
      "LLPs based on turnover / contribution thresholds",
      "Certain entities as required under specific laws"
    ],
    benefitsTitle: "Our Statutory Audit Services",
    benefits: [
      "Appointment and compliance under Companies Act",
      "Risk-based audit approach",
      "Detailed verification of books and financial statements",
      "CARO reporting, where applicable",
      "Identification of control weaknesses",
      "Practical recommendations for improvement"
    ],
    compliancesTitle: "Scope of Audit Work",
    compliances: [
      "Verification of books of accounts",
      "Examination of Balance Sheet, P and L, and Cash Flow Statements",
      "Review of internal controls and systems",
      "Compliance with accounting standards (Ind AS / AS)",
      "CARO reporting where applicable"
    ]
  },

  "increase authorized capital": {
    title: "Increase in Authorised Share Capital",
    subtitle: "Alteration of the Memorandum of Association (MOA) capital clause under Section 61 of the Companies Act, 2013.",
    intro: "Required when raising funds, inducting investors, issuing ESOPs, or undertaking mergers - increases the ceiling limit for issuing shares.",
    definitionTitle: "What is Authorised Share Capital?",
    definitionText: "Authorised Share Capital represents the maximum amount of share capital that a company is legally permitted to issue to its shareholders. Increasing it requires Board approval, shareholder approval, and filing with MCA.",
    eligibilityTitle: "When is It Required?",
    eligibility: [
      "Issue of new shares to investors or venture capitalists",
      "Expansion of business operations",
      "Conversion of loans into equity",
      "Employee Stock Option Plans (ESOPs)",
      "Merger, acquisition, or restructuring",
      "Compliance with funding requirements"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Check AOA - ensure it authorises increase in capital",
      "Step 2: Convene Board Meeting - pass Board Resolution",
      "Step 3: Hold EGM / AGM - pass Ordinary Resolution by shareholders",
      "Step 4: File Form SH-7 with MCA within 30 days",
      "Step 5: Pay applicable ROC filing fees and state stamp duty"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board Resolution",
      "Ordinary Resolution passed by shareholders",
      "Altered Memorandum of Association (MOA)",
      "Notice of General Meeting with explanatory statement",
      "Copy of Articles of Association (if amended)"
    ],
    timeline: "MCA Approval: 2-5 working days after Form SH-7 is filed within 30 days of resolution"
  },

  "change in directors": {
    title: "Change in Director",
    subtitle: "Any change in the Board of Directors must be reported to the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013.",
    intro: "Proper compliance ensures transparency, legal validity, and smooth functioning of the company.",
    definitionTitle: "Types of Change in Director",
    definitionText: "A change in directors may occur through: appointment of a new director, resignation of an existing director, removal of director by shareholders, retirement by rotation, or change in designation.",
    benefitsTitle: "Legal Provisions",
    benefits: [
      "Section 149 - Appointment of Directors",
      "Section 152 - Appointment procedures",
      "Section 168 - Resignation of Director",
      "Section 169 - Removal of Director",
      "Section 170 - Register of Directors"
    ],
    processTitle: "Procedure for Change in Director",
    process: [
      "Step 1: Obtain DIN and DSC for incoming director (if applicable)",
      "Step 2: Obtain Consent (Form DIR-2) and Declaration of non-disqualification (Form DIR-8)",
      "Step 3: Convene Board Meeting and pass resolution",
      "Step 4: Shareholders approval (if required for certain appointments or removals)",
      "Step 5: File Form DIR-12 with MCA within 30 days of change"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Consent Letter (DIR-2)",
      "Resignation Letter (if applicable)",
      "Board Resolution",
      "Shareholder Resolution (if applicable)",
      "Identity and Address Proof of incoming Director",
      "Declaration of non-disqualification (DIR-8)"
    ],
    timeline: "DIR-12 must be filed within 30 days of the change. Delay attracts additional fees.",
    compliancesTitle: "Post-Compliance Actions",
    compliances: [
      "Update Register of Directors and KMP",
      "Update company records and statutory registers",
      "Intimate banks, authorities, and stakeholders",
      "Update letterheads and official records",
      "Ensure DIN is active and KYC compliant"
    ]
  },

  "transfer of physical shares": {
    title: "Transfer of Physical Shares",
    subtitle: "Transfer of ownership of shares held in physical share certificate form under the Companies Act, 2013.",
    intro: "Proper documentation and adherence to legal procedures ensure a valid and legally enforceable transfer.",
    processTitle: "Procedure for Transfer",
    process: [
      "Step 1: Fill and sign Form SH-4 (Share Transfer Deed) - executed by both parties with witness signature",
      "Step 2: Pay stamp duty (generally 0.015% of consideration)",
      "Step 3: Submit Original Share Certificate, executed SH-4, and KYC documents to the company",
      "Step 4: Company verifies documents and signatures - Board approval may be required",
      "Step 5: Company registers transfer and issues new share certificate in the name of transferee"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Share Transfer Deed (Form SH-4)",
      "Original Share Certificate",
      "PAN Card of transferor and transferee",
      "Address proof of transferee",
      "Stamp duty payment proof",
      "Board Resolution (if applicable)"
    ],
    timeline: "Approval and Registration: Typically within 1-2 months as per company process"
  },

  "amendment of moa & aoa": {
    title: "Amendment of MOA and AOA",
    subtitle: "Alteration of the Memorandum of Association and Articles of Association as the business evolves.",
    intro: "MOA defines the company scope, objectives, and powers. AOA governs its internal rules and management. Amendments must comply with the Companies Act, 2013.",
    definitionTitle: "What Can Be Amended?",
    definitionText: "MOA amendments may cover: change in company name, registered office state, object clause, authorised share capital, or liability clause. AOA amendments may cover: internal governance rules, share transfer restrictions, shareholder rights, or board procedures.",
    processTitle: "Amendment Procedure",
    process: [
      "Step 1: Convene Board Meeting - approve proposal for amendment",
      "Step 2: Hold EGM - pass Special Resolution (for MOA changes) or Ordinary/Special Resolution (for AOA)",
      "Step 3: File Form MGT-14 with MCA within 30 days of passing resolution",
      "Step 4: File INC-24 (if name change is involved)",
      "Step 5: Update all statutory records, registrations, and stakeholders"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board Resolution",
      "Special / Ordinary Resolution",
      "Notice of EGM with explanatory statement",
      "Altered MOA / AOA",
      "Existing Certificate of Incorporation"
    ]
  },

  "change in name of company": {
    title: "Change in Name of Company",
    subtitle: "A company may change its name due to rebranding, change in business activities, merger, or strategic reasons.",
    intro: "The name change process is governed by Section 13 of the Companies Act, 2013 and requires approval from shareholders and MCA.",
    eligibilityTitle: "When is Name Change Required?",
    eligibility: [
      "Rebranding or change in brand identity",
      "Change in business activities or object clause",
      "Merger, acquisition, or restructuring",
      "Legal or regulatory requirements",
      "Correction or simplification of existing name"
    ],
    processTitle: "Procedure for Name Change",
    process: [
      "Step 1: Convene Board Meeting - approve proposal and authorize name application",
      "Step 2: File RUN (Reserve Unique Name) or SPICe+ (Part A) for name reservation",
      "Step 3: Obtain MCA approval for proposed name",
      "Step 4: Hold EGM - pass Special Resolution",
      "Step 5: File Form MGT-14 (within 30 days) and Form INC-24",
      "Step 6: MCA issues fresh Certificate of Incorporation with new name"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board Resolution",
      "Special Resolution",
      "Notice of EGM with explanatory statement",
      "Approved name from MCA",
      "Altered MOA and AOA",
      "Copy of existing Certificate of Incorporation"
    ],
    timeline: "Name Approval: 2-3 days | EGM and Filing: 3-5 days | MCA Approval (INC-24): 5-7 working days",
    compliancesTitle: "Post-Compliance Actions",
    compliances: [
      "Update PAN, TAN, GST, and bank records",
      "Amend all registrations and licenses",
      "Update letterheads, invoices, website, and signage",
      "Inform stakeholders, clients, and authorities"
    ]
  },

  "xbrl filing": {
    title: "XBRL Filing (Accounting Standards)",
    subtitle: "eXtensible Business Reporting Language format prescribed by MCA for electronic filing of financial statements.",
    intro: "Certain companies are required to file their financial statements in XBRL format to ensure uniformity, transparency, and easy analysis by regulators.",
    definitionTitle: "What is XBRL Filing?",
    definitionText: "XBRL is a standardized format prescribed by the Ministry of Corporate Affairs (MCA) for filing financial statements electronically.",
    eligibilityTitle: "Applicability of XBRL Filing",
    eligibility: [
      "Companies listed on stock exchanges (not using Ind AS)",
      "Companies with paid-up capital of Rs.5 crore or more",
      "Companies with turnover of Rs.100 crore or more",
      "All companies required to prepare financial statements under Accounting Standards (AS)"
    ],
    benefitsTitle: "Benefits of XBRL Reporting",
    benefits: [
      "Standardized data format accepted by MCA and SEBI",
      "Enhanced transparency and comparability of financial statements",
      "Easier regulatory analysis and compliance verification",
      "Reduced manual data entry and errors",
      "Globally accepted format for financial reporting"
    ]
  },


  "company closure": {
    title: "Strike Off / Closure of Company and LLP",
    subtitle: "Legal process of closing down a company or LLP by removing its name from the Registrar records.",
    intro: "Companies or LLPs that are no longer operational can be closed through the Strike Off process to avoid accumulating penalties and compliance obligations.",
    definitionTitle: "What is Strike Off?",
    definitionText: "Strike Off is a legal process of closing a company or LLP by removing its name from the register maintained by the Registrar of Companies (ROC). After strike off, the entity ceases to exist as a legal entity.",
    eligibilityTitle: "Eligibility for Strike Off",
    eligibility: [
      "Company has not commenced business within 1 year of incorporation, OR",
      "Company has not been carrying on any business for 2 immediately preceding financial years",
      "No pending litigation or disputes",
      "All pending returns must be filed",
      "All dues and liabilities must be cleared"
    ],
    processTitle: "Strike Off Procedure",
    process: [
      "Step 1: Board Meeting - pass resolution to close the company",
      "Step 2: File all pending annual returns and financial statements",
      "Step 3: Clear all tax liabilities and obtain a No Objection Certificate from IT department",
      "Step 4: File Form STK-2 (for companies) or Form 24 (for LLPs) with MCA",
      "Step 5: MCA publishes notice in Official Gazette",
      "Step 6: Strike Off order issued - company ceases to exist"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board Resolution for closure",
      "Indemnity bond by directors",
      "Affidavit of directors",
      "Latest financial statements",
      "Statement of accounts certified by CA",
      "No objection from tax authorities"
    ],
    timeline: "Typically 3-6 months from filing of application, subject to MCA processing"
  },

  "change in registered address": {
    title: "Change in Registered Office Address",
    subtitle: "Any change in the registered office address of a company must be intimated to the Ministry of Corporate Affairs (MCA).",
    intro: "A company registered office is the official address for all government and legal correspondence. Changing it requires proper board/shareholder approval and MCA filing.",
    definitionTitle: "Types of Address Change",
    definitionText: "Change within the same city/town/village: Board Resolution + Form INC-22. Change within same state (different ROC jurisdiction): Special Resolution + Form INC-23. Change to another state: Special Resolution + Form INC-23 + approval from Regional Director.",
    processTitle: "Procedure for Address Change",
    process: [
      "Step 1: Convene Board Meeting - pass Board Resolution for change",
      "Step 2: For inter-state change - hold EGM and pass Special Resolution",
      "Step 3: Publish notice in a newspaper (for inter-state change)",
      "Step 4: File Form INC-22 (same city) or Form INC-23 (different ROC/state) within 30 days",
      "Step 5: Update PAN, GST, bank records and all registrations"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board Resolution / Special Resolution",
      "Proof of new address (electricity bill / utility bill, not older than 2 months)",
      "Rent Agreement + NOC from owner (if rented)",
      "Notice of EGM with explanatory statement (for special resolution cases)",
      "Newspaper publication proof (for inter-state)"
    ],
    compliancesTitle: "Post-Change Compliances",
    compliances: [
      "Update GST registration with new address",
      "Update PAN / TAN records with Income Tax dept",
      "Notify bank and update account records",
      "Update letterheads, invoices, website, and signage"
    ]
  },

  "fc gpr form": {
    title: "FC-GPR Form Filing",
    subtitle: "Foreign Collaboration - General Permission Route filing with RBI for reporting FDI inflows.",
    intro: "Form FC-GPR is filed to report Foreign Direct Investment (FDI) inflows when an Indian company issues shares or convertible instruments to a foreign investor.",
    definitionTitle: "What is Form FC-GPR?",
    definitionText: "Form FC-GPR is a mandatory reporting form to be filed with the Reserve Bank of India (RBI) through the FIRMS portal within 30 days of issuing capital instruments to a person resident outside India.",
    benefitsTitle: "Filing Highlights",
    benefits: [
      "Secures compliance under FEMA regulations",
      "Avoids heavy compounding penalties from RBI",
      "Validates foreign capital infusion into the Indian company",
      "Ensures transparent share capital allotment for foreign investors"
    ],
    processTitle: "Filing Procedure",
    process: [
      "Step 1: Receipt of foreign funds and issue of Foreign Inward Remittance Certificate (FIRC)",
      "Step 2: Capital allotment of shares within 60 days of fund receipt",
      "Step 3: Registration on RBI FIRMS portal and creating entity master / business user",
      "Step 4: Submission of Form FC-GPR along with required attachments within 30 days of share allotment"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "FIRC and KYC from the remitters bank",
      "Board Resolution for share allotment",
      "Share Valuation Certificate by a SEBI registered merchant banker or Chartered Accountant",
      "CS Certificate confirming compliance with FEMA provisions"
    ],
    timeline: "Filing within 30 days of share allotment | RBI approval typically 2-4 weeks"
  },

  "fc trs form": {
    title: "FC-TRS Form Filing",
    subtitle: "Foreign Collaboration - Transfer of Shares filing with RBI.",
    intro: "Form FC-TRS is used for reporting transfer of capital instruments (shares, debentures) between a resident and a non-resident of India.",
    definitionTitle: "What is Form FC-TRS?",
    definitionText: "Form FC-TRS is a mandatory reporting requirement under FEMA. It must be filed within 60 days of transfer of shares or receipt/payment of consideration, whichever is earlier.",
    benefitsTitle: "Filing Highlights",
    benefits: [
      "Facilitates legal transfer of ownership between residents and non-residents",
      "Ensures strict compliance with RBI valuation guidelines",
      "Secures clearance from Authorized Dealer (AD) Category-I bank"
    ],
    processTitle: "Filing Steps",
    process: [
      "Step 1: Execute Share Transfer Agreement and Form SH-4",
      "Step 2: Obtain Share Valuation Certificate",
      "Step 3: Register / Login on FIRMS portal as a Business User",
      "Step 4: Upload Form FC-TRS with complete financial details and KYC within 60 days"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Share Transfer Agreement",
      "Valuation Certificate by a Chartered Accountant / Merchant Banker",
      "FIRC / Outward Remittance copy as proof of payment",
      "Consent letters from transferor and transferee",
      "KYC of resident and non-resident parties"
    ],
    timeline: "Filing within 60 days of transfer / payment | Bank review typically 2-3 weeks"
  },

  "fla form": {
    title: "FLA Return Filing",
    subtitle: "Annual Return on Foreign Liabilities and Assets to RBI.",
    intro: "The Annual Return on Foreign Liabilities and Assets (FLA) is a mandatory annual filing for Indian entities that have either received FDI or made ODI in previous years.",
    definitionTitle: "What is FLA Return?",
    definitionText: "FLA return is an annual reporting requirement for Indian companies, LLPs, or alternative investment funds that hold foreign assets or liabilities on their balance sheet. It must be filed directly with RBI by July 15th every year.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Ensures compliance with annual RBI statistical reporting",
      "Avoids FEMA non-compliance penalties",
      "Required for companies making overseas direct investments (ODI)"
    ],
    processTitle: "Filing Steps",
    process: [
      "Step 1: Prepare audited financial statements for the financial year",
      "Step 2: Collect data on foreign equity shareholding, FDI, and ODI details",
      "Step 3: Log in to the RBI FLAIR portal",
      "Step 4: Fill out the online FLA return and submit it before July 15"
    ],
    documentsTitle: "Information Required",
    documents: [
      "Audited Balance Sheet and Profit and Loss Account",
      "Details of foreign equity participation (FDI percentage)",
      "Details of overseas direct investment (ODI assets)",
      "Details of external commercial borrowings (ECB) or trade credits, if any"
    ],
    timeline: "Due date: 15th July of every financial year | Online submission confirmation is instant"
  },

  "pan": {
    title: "PAN Card Registration",
    subtitle: "Permanent Account Number application for individuals and business entities.",
    intro: "PAN is a ten-digit unique alphanumeric identifier issued by the Income Tax Department of India. It is mandatory for all tax filings, business setups, and major financial transactions.",
    definitionTitle: "Why is PAN Required?",
    definitionText: "A Permanent Account Number (PAN) is required for any entity earning taxable income in India. It is mandatory to open a bank account, register a company/LLP/firm, apply for GST, and file Income Tax Returns.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Mandatory for filing Income Tax Returns",
      "Acts as a valid proof of identity across India",
      "Mandatory for opening current/saving bank accounts",
      "Required for high-value financial transactions"
    ],
    processTitle: "Application Steps",
    process: [
      "Step 1: Fill out Form 49A (for Indian citizens/entities) or Form 49AA (for foreigners)",
      "Step 2: Submit Identity, Address, and Date of Birth proof",
      "Step 3: Complete online fee payment",
      "Step 4: Complete Aadhaar e-KYC or dispatch physical documents for verification"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Aadhaar Card / Voter ID / Passport (for individuals)",
      "Certificate of Incorporation / Partnership Deed (for business entities)",
      "Registered Address proof of the business",
      "Passport size photographs (for physical route)"
    ],
    timeline: "e-PAN: 1-2 days | Physical card delivery: 7-15 working days"
  },

  "tan": {
    title: "TAN Registration",
    subtitle: "Tax Deduction and Collection Account Number application.",
    intro: "TAN is a 10-digit alphanumeric number allotted to persons who are required to deduct or collect tax at source (TDS / TCS) under the Income Tax Act.",
    definitionTitle: "Who must obtain TAN?",
    definitionText: "Every business or individual who pays salaries, professional fees, rent, or contract fees above threshold limits must deduct TDS and needs a TAN to file TDS returns.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Enables legal deduction of TDS/TCS",
      "Avoids penalty for not quoting TAN (up to Rs.10,000)",
      "Allows generation of Form 16 / 16A certificates for payees"
    ],
    processTitle: "Application Steps",
    process: [
      "Step 1: Fill out Form 49B online on the NSDL portal",
      "Step 2: Submit deductor details (Company, LLP, Firm, or Individual)",
      "Step 3: Pay the processing fee online",
      "Step 4: Dispatch signed acknowledgment to NSDL office"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card of the applicant entity/proprietor",
      "Certificate of Incorporation / Partnership Deed",
      "Authorized signatory proof"
    ],
    timeline: "TAN allotment: 2-5 working days"
  },

  "iec import export code": {
    title: "Import Export Code (IEC) Registration",
    subtitle: "Mandatory 10-digit code issued by DGFT for import-export businesses in India.",
    intro: "Import Export Code (IEC) is a unique registration key required by anyone importing or exporting goods and services from/to India.",
    definitionTitle: "What is IEC?",
    definitionText: "Import Export Code (IEC) is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. It has lifetime validity and requires no annual return filings.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Enables global business expansion and cross-border trade",
      "Lifetime validity - no renewal required",
      "Required for custom clearance and international bank remittances",
      "Allows businesses to claim export schemes and benefits"
    ],
    processTitle: "Registration Steps",
    process: [
      "Step 1: Register on the DGFT portal using PAN",
      "Step 2: Fill out ANF 2A application form online",
      "Step 3: Upload business details and bank information",
      "Step 4: Pay government application fee and submit for instant system-generated IEC"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card of the applicant entity or proprietor",
      "Aadhaar Card / Passport of directors/partners",
      "Cancelled cheque leaf of the business bank account",
      "Address proof of business (rent deed / electricity bill)"
    ],
    timeline: "Instant generation (same day of application online)"
  },

  "12a-and-80g": {
    title: "12A & 80G Registration",
    subtitle: "Tax exemptions and donor benefits for NGOs under the Income Tax Act.",
    intro: "NGOs, Trusts, and Section 8 companies must obtain 12A and 80G registrations to secure income tax exemption for the NGO and provide tax deductions to their donors.",
    definitionTitle: "What are 12A & 80G?",
    definitionText: "12A registration exempts the NGO's surplus income from tax. 80G registration allows donors to claim a 50% tax deduction on their donations under Section 80G of the Income Tax Act.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Complete tax exemption on NGO grants, donations, and surplus",
      "Encourages donors to contribute due to tax savings",
      "Enables eligibility for corporate social responsibility (CSR) funding",
      "Enhances trust, transparency, and legal credibility"
    ],
  },

  "msme registration": {
    title: "MSME / Udyam Registration",
    subtitle: "Government registration for Micro, Small and Medium Enterprises.",
    intro: "MSME or Udyam registration is a government portal sign-up that awards a unique identification certificate to micro, small, and medium businesses to unlock national credit benefits, subsidies, and protection.",
    definitionTitle: "What is MSME Registration?",
    definitionText: "MSME registration classifies businesses based on investment in plant & machinery and annual turnover. It serves as a vital recognition for qualifying for government schemes and priority sector lending.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Collateral-free bank loans under government credit guarantee schemes",
      "Lower interest rates from public and private banks",
      "Protection against delayed payments (mandatory interest for late dues)",
      "Subsidies on patent/trademark registration and electricity bills",
      "Special preferences in government tenders"
    ],
    processTitle: "Registration Steps",
    process: [
      "Step 1: Go to the official Udyam Registration portal",
      "Step 2: Enter Aadhaar Number of proprietor / partner / director",
      "Step 3: Fill in business activity, PAN, bank details, and investment metrics",
      "Step 4: Verify with OTP and download the system-generated Udyam Registration Certificate"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Aadhaar Card of the owner / authorized director",
      "PAN Card of the business/owner",
      "Business Bank Account details (IFSC and Account Number)",
      "Investment and turnover details of the business"
    ],
    timeline: "Instant generation (within 1 day of application)"
  },

  "partnership firm registration": {
    title: "Partnership Firm Registration",
    subtitle: "Registering a traditional partnership firm with the Registrar of Firms.",
    intro: "A Partnership Firm is a popular business structure where two or more individuals agree to share profits and liabilities of a business as partners, governed by the Indian Partnership Act, 1932.",
    definitionTitle: "What is Partnership Firm Registration?",
    definitionText: "A Partnership Firm can be registered or unregistered. However, registering it with the Registrar of Firms (RoF) grants the partners key legal rights, such as the ability to sue third parties and enforce deed terms in court.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Easy and cost-effective registration compared to LLCs/Companies",
      "Shared responsibility and combined capital among partners",
      "Fewer compliance audits and regulatory overheads",
      "Registered firms have legal rights to file court cases for recovery"
    ],
    processTitle: "Registration Steps",
    process: [
      "Step 1: Draft the Partnership Deed on stamp paper detailing profit sharing, capital, and partner terms",
      "Step 2: Get the Deed signed and notarized by all partners",
      "Step 3: Apply for PAN & TAN card in the name of the Partnership Firm",
      "Step 4: File application (Form 1) with the Registrar of Firms along with registration fees"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Signed & Notarized Partnership Deed",
      "PAN & Aadhaar of all partners",
      "Address proof of the firm (Electricity bill / Rent agreement + NOC)",
      "Form 1 signed by all partners"
    ],
    timeline: "Deed drafting: 1-2 days | PAN allotment: 2-3 days | Firm Registration: 7-15 working days"
  },

  "income tax cases": {
    title: "Income Tax Cases & Notice Resolution",
    subtitle: "Professional representation, litigation support, and response filing for income tax notices.",
    intro: "Receive expert assistance in handling Income Tax notices, assessments, scrutiny cases, and appeals before the Income Tax Department.",
    definitionTitle: "What are Income Tax Scrutiny & Notices?",
    definitionText: "The Income Tax Department issues notices under various sections (e.g., 143(1), 143(2), 148, 142(1)) for scrutiny assessment, mismatch in income/TDS, non-filing of returns, or tax evasion queries. Resolving them requires detailed legal replies, matching computations, and online/offline representations.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Minimizes tax liabilities and risk of heavy penalties",
      "Ensures legally sound, compliant replies to tax officers",
      "Saves you from arbitrary ex-parte high tax assessments",
      "Expert representation before CIT (Appeals) and assessment officers"
    ],
    processTitle: "Resolution Steps",
    process: [
      "Step 1: Analysis of the notice and identifying the tax department's queries",
      "Step 2: Gathering financial records, bank statements, and tax computations",
      "Step 3: Drafting a strong, legally backed submission / reconciliation response",
      "Step 4: Submitting the response on the e-filing portal or representing before the officer"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Copy of the Income Tax Notice received",
      "ITR filings and Form 26AS / AIS / TIS for the relevant year",
      "Bank statements and books of accounts",
      "Supporting bills/invoices or evidence for queried deductions"
    ],
    timeline: "Case assessment depends on notice deadlines; replies drafted within 3-7 working days"
  },

  "company compliance": {
    title: "Annual Company Compliance",
    subtitle: "Complete annual compliance services for Private Limited Companies under the Companies Act, 2013.",
    intro: "Every Private Limited Company incorporated in India is required to fulfill annual compliance tasks including holding meetings, maintaining books of accounts, and filing annual returns with the MCA.",
    definitionTitle: "What is Company Compliance?",
    definitionText: "Annual company compliance consists of regular legal filings like Form AOC-4 (financial statements) and Form MGT-7 (annual returns), convening Board meetings, and maintaining statutory registers.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Avoids heavy MCA penalties (Rs.100/day per form)",
      "Maintains clean legal standing for investors and bank credits",
      "Keeps the active status of the company intact on the MCA portal",
      "Prevents disqualification of directors"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Preparation of audited financial statements by a CA",
      "Step 2: Convene Annual General Meeting (AGM)",
      "Step 3: File Form AOC-4 within 30 days of the AGM",
      "Step 4: File Form MGT-7 within 60 days of the AGM"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Audited Balance Sheet & Profit & Loss Statement",
      "Director's Report and Auditor's Report",
      "Notice and minutes of the Annual General Meeting"
    ],
    timeline: "Annual filings due within 30/60 days of the AGM"
  },

  "llp compliance": {
    title: "Annual LLP Compliance",
    subtitle: "Yearly statutory filings for Limited Liability Partnerships under the LLP Act, 2008.",
    intro: "Limited Liability Partnerships must file annual returns and statements of accounts with the Registrar of Companies to keep their legal active status.",
    definitionTitle: "What is LLP Compliance?",
    definitionText: "LLP compliance requires filing Form 11 (Annual Return) by May 30th and Form 8 (Statement of Account & Solvency) by October 30th of every financial year.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Ensures the LLP continues without legal interruptions",
      "Avoids penalty of Rs.100 per day for non-filing",
      "Maintains transparency with partners and creditors"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Prepare books of accounts and statement of assets/liabilities",
      "Step 2: File Form 11 (Annual Return) on or before 30th May",
      "Step 3: File Form 8 (Statement of Accounts) on or before 30th October"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Details of contribution by partners",
      "LLP Agreement copy",
      "Financial statements of the LLP"
    ],
    timeline: "Form 11 due by 30th May | Form 8 due by 30th October annually"
  },

  "opc compliance": {
    title: "Annual OPC Compliance",
    subtitle: "Yearly filings and legal updates for One Person Companies.",
    intro: "One Person Companies enjoy relaxed rules compared to Private Limited Companies, but they must still file annual accounts and returns with the MCA.",
    definitionTitle: "What is OPC Compliance?",
    definitionText: "OPC compliance involves preparing financial accounts, getting them audited, and filing Form AOC-4 and Form MGT-7A (simplified annual return for OPCs) with the ROC.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "No requirement to hold an AGM (Annual General Meeting)",
      "Maintains limited liability status of the single owner",
      "Exempt from signing of returns by a Company Secretary in most cases"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Audit of accounts by a registered Chartered Accountant",
      "Step 2: File Form AOC-4 within 180 days from the end of the financial year",
      "Step 3: File Form MGT-7A within 60 days of filing AOC-4"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Audited financial accounts (Balance sheet, P&L)",
      "Nominee's consent and details",
      "Director's report"
    ],
    timeline: "AOC-4 due by 27th September | MGT-7A due by 26th November annually"
  },

  "name change company": {
    title: "Company Name Change",
    subtitle: "Changing the official name of a company under Section 13 of the Companies Act, 2013.",
    intro: "A company can alter its Memorandum of Association (MOA) objective to change its name after getting ROC and shareholder approvals.",
    definitionTitle: "What is a Name Change?",
    definitionText: "A company name change is a statutory process involving name check approval (RUN service), passing a special resolution, and filing Form INC-24 with the Central Government.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Enables strategic rebranding or pivot in business objectives",
      "Resolves trademark disputes or brand infringement notices",
      "Ensures clean legal title change for all contracts"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Apply for name reservation via RUN on the MCA portal",
      "Step 2: Convene EGM and pass a Special Resolution",
      "Step 3: File Form MGT-14 within 30 days of the resolution",
      "Step 4: File Form INC-24 within 30 days of the resolution to get new COI"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "New Name approval letter from MCA",
      "Copy of Special Resolution and Minutes of EGM",
      "Altered copy of MOA and AOA"
    ],
    timeline: "Typically 15-20 working days for MCA approval"
  },

  "din ekyc filing": {
    title: "DIN eKYC Filing (DIR-3 KYC)",
    subtitle: "Mandatory annual KYC update for all individuals holding a Director Identification Number.",
    intro: "Every director who has been allotted a DIN is required to submit Form DIR-3 KYC or the web-based service annually to keep the DIN active.",
    definitionTitle: "What is DIN eKYC?",
    definitionText: "DIN eKYC is a compliance check implemented by the MCA to ensure active and correct contact/address details of all registered company directors. Failing to file leads to deactivation of the DIN and a Rs.5,000 penalty.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Prevents deactivation of DIN",
      "Avoids Rs.5,000 late filing penalty",
      "Ensures smooth digital signature registration and MCA portal filings"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Verify current mobile and email details of the director",
      "Step 2: Prepare Form DIR-3 KYC (using Digital Signature of the director)",
      "Step 3: Complete OTP verification for email and mobile",
      "Step 4: Upload form on MCA and generate SRN confirmation receipt"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Aadhaar Card and PAN of the Director",
      "Passport (Mandatory if director is a foreign national)",
      "Valid Indian mobile number and personal email address"
    ],
    timeline: "Due by 30th September of every financial year"
  },

  "din reactivation": {
    title: "DIN Reactivation Support",
    subtitle: "Activating deactivated Director Identification Numbers on the MCA portal.",
    intro: "If a director fails to file the DIR-3 KYC within the due date, their DIN is marked as 'Deactivated'. We help reactivate it by handling the filing and fee payments.",
    definitionTitle: "What is DIN Reactivation?",
    definitionText: "DIN reactivation is the legal process of restoring a director's deactivated DIN by paying the government penalty fee of Rs.5,000 and submitting the pending DIR-3 KYC form.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Restores director's authority to sign company documents and file forms",
      "Re-enables digital signature authentication on the MCA portal",
      "Secures compliance standing of the linked companies"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Check the status of the DIN and verify mobile/email details",
      "Step 2: Make the government late filing fee payment of Rs.5,000",
      "Step 3: Prepare and upload Form DIR-3 KYC with valid DSC",
      "Step 4: Track status on the MCA database until it changes back to 'Active'"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "PAN Card & Aadhaar of the director",
      "Latest utility bill (electricity/phone) showing address",
      "Director's Digital Signature Certificate (DSC)"
    ],
    timeline: "Typically reactivated within 1-2 working days after upload"
  },

  "remove director": {
    title: "Removal / Resignation of Director",
    subtitle: "Filing and process for removal or resignation of a director from a company.",
    intro: "A director may resign voluntarily or be removed by shareholders under Section 169 of the Companies Act, 2013. In both cases, Form DIR-12 must be filed with the ROC.",
    definitionTitle: "What is Director Removal?",
    definitionText: "It is the process of legally updating the board structure by filing Form DIR-12, supported by a resignation letter or a shareholder special resolution for removal.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Updates public database on MCA with correct board structure",
      "Protects the company and outgoing director from future liabilities",
      "Maintains clean governance and board compliance"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Board or Shareholders receive resignation or issue notice of removal",
      "Step 2: Convene meeting, pass resolution, and issue approval letter",
      "Step 3: File Form DIR-12 within 30 days of the change",
      "Step 4: Update company registers and records"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Resignation letter / Notice of removal",
      "Board / Shareholder Resolution copy",
      "Identity and Address proof of the director"
    ],
    timeline: "Form DIR-12 must be filed within 30 days of resignation/removal"
  },

  "adt 1 filing": {
    title: "ADT-1 Filing (Appointment of Auditor)",
    subtitle: "Reporting appointment of statutory auditor under Section 139 of the Companies Act, 2013.",
    intro: "Every company must appoint its first auditor within 30 days of incorporation, and file Form ADT-1 to intimate the Registrar of Companies.",
    definitionTitle: "What is Form ADT-1?",
    definitionText: "Form ADT-1 is filed by a company with the ROC to report the appointment, reappointment, or casual vacancy replacement of a statutory auditor.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Fulfills mandatory statutory audit setup",
      "Avoids penalty fees for delayed filing",
      "Establishes official auditor role on MCA database"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Obtain consent and eligibility certificate from the auditor",
      "Step 2: Hold Board/Shareholder meeting and pass resolution appointing the auditor",
      "Step 3: Prepare Form ADT-1 with auditor details and resolution copy",
      "Step 4: File the form on the MCA portal within 15 days of the meeting"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Copy of Board/Shareholder Resolution",
      "Written consent and eligibility letter from the CA firm/Auditor",
      "Copy of intimation letter sent to the Auditor"
    ],
    timeline: "Filing within 15 days of the appointment date"
  },

  "dpt 3 filing": {
    title: "DPT-3 Filing (Return of Deposits)",
    subtitle: "Mandatory annual filing for reporting loans and deposits received by a company.",
    intro: "Form DPT-3 is a yearly return that every company (except government companies) must file with the ROC to report outstanding deposits or loan receipts not considered deposits.",
    definitionTitle: "What is Form DPT-3?",
    definitionText: "Form DPT-3 is a compliance filing under the Companies Act to monitor company loans, deposits, advances, and unsecured borrowings. Filing is mandatory even if there are no outstanding loans.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Ensures transparent reporting of corporate borrowings",
      "Avoids heavy non-compliance penalties on directors and company",
      "Mandatory for all active private and public companies"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Consolidate loan, deposit, and unsecured debt data as of March 31st",
      "Step 2: Obtain Auditor's Certificate (mandatory if reporting outstanding deposits)",
      "Step 3: Prepare Form DPT-3 and attach the financial statements/auditor certificate",
      "Step 4: Upload on the MCA portal before June 30th"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Copy of trust deed, if any",
      "Auditor's certificate on loans/deposits",
      "Copy of Board resolution authorizing borrowings"
    ],
    timeline: "Due by June 30th of every financial year"
  },



  "dormant status filing": {
    title: "Dormant Status Filing (Form MSC-1)",
    subtitle: "Applying for dormant status for inactive companies under Section 455 of the Companies Act.",
    intro: "A company formed for a future project or holding an asset/intellectual property can apply for 'Dormant' status to reduce compliance overheads.",
    definitionTitle: "What is a Dormant Company?",
    definitionText: "A dormant company is one that is temporarily inactive with no significant accounting transactions. It maintains its legal existence with minimal annual filing compliance.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Preserves company name and assets for future business",
      "Significantly reduces annual compliance costs and audit requirements",
      "Avoids strike-off / closure risk due to temporary inactivity"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Convene Board meeting and pass resolution",
      "Step 2: Hold EGM and pass Special Resolution",
      "Step 3: File Form MGT-14 within 30 days of EGM",
      "Step 4: File Form MSC-1 with the ROC to obtain Dormant status"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Copy of Special Resolution and Minutes of EGM",
      "Audited financial statement of the company",
      "No objection certificate from creditors/regulatory authorities"
    ],
    timeline: "ROC approval takes 2-3 weeks from submission of MSC-1"
  },

  "demat of shares": {
    title: "Dematerialisation (Demat) of Shares",
    subtitle: "Converting physical share certificates into electronic format.",
    intro: "We assist companies and shareholders in converting their physical share certificates into electronic records through a depository (NSDL/CDSL).",
    definitionTitle: "What is Dematerialisation?",
    definitionText: "Demat is the process where a shareholder's physical share certificates are cancelled and equivalent shares are credited in electronic form to their Demat account. It is now mandatory for private limited companies (other than small companies) to facilitate dematerialisation.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Eliminates risk of lost, stolen, forged, or damaged certificates",
      "Facilitates instant, paperless share transfers",
      "Mandatory under MCA guidelines for raising capital or transferring shares"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Client opens a Demat account with a Depository Participant (DP)",
      "Step 2: Submit Demat Request Form (DRF) along with physical certificates",
      "Step 3: DP processes the request and sends details to the company/registrar",
      "Step 4: Company verifies and confirms demat, and shares are credited electronically"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Demat Request Form (DRF) signed by the holder",
      "Original physical share certificates",
      "PAN & Aadhaar of the shareholder"
    ],
    timeline: "Process completed within 15-20 working days"
  },

  "commencement inc 20a": {
    title: "Commencement of Business (Form INC-20A)",
    subtitle: "Mandatory filing for companies incorporated after 2nd November 2018.",
    intro: "Every company must file Form INC-20A within 180 days of incorporation, showing proof of capital subscription, to legally start business operations and borrow funds.",
    definitionTitle: "What is Form INC-20A?",
    definitionText: "Form INC-20A is a declaration of commencement of business filed by a director, verifying that every subscriber to the MOA has paid the value of the shares agreed to be taken by them.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Mandatory to legally start any business operations",
      "Enables the company to borrow capital or open bank loans",
      "Avoids penalty on directors (Rs.1,000/day) and ROC company strike-off"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Open a company current bank account",
      "Step 2: Subscribers transfer agreed share capital to the bank account",
      "Step 3: Obtain bank account statement showing receipt of capital",
      "Step 4: Upload Form INC-20A with bank statement within 180 days of incorporation"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Bank statement showing capital infusion from subscribers",
      "Certificate of Incorporation and MOA copy",
      "Photo of registered office along with a director standing outside (incorporating latitude/longitude geotags)"
    ],
    timeline: "Must be filed within 180 days of incorporation"
  },

  "issuance of debentures": {
    title: "Issuance of Debentures",
    subtitle: "Process of raising debt capital by issuing debentures under the Companies Act, 2013.",
    intro: "Companies can raise long-term debt funds by issuing secured or unsecured debentures to public or private investors, following strict MCA guidelines.",
    definitionTitle: "What is a Debenture Issue?",
    definitionText: "A debenture is a debt instrument issued under the common seal of a company, acknowledging debt and specifying terms of repayment of principal and interest. It can be convertible or non-convertible.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Enables raising capital without diluting ownership or voting rights",
      "Interest paid on debentures is tax-deductible",
      "Provides flexible repayment terms for long-term investments"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Pass Board Resolution and obtain shareholder approval via Special Resolution (if required)",
      "Step 2: Appoint Debenture Trustee and execute Debenture Trust Deed (Form SH-12) for secured debentures",
      "Step 3: Issue Offer Letter (Form PAS-4) and file Form PAS-3 (Allotment) within 30 days of allotment",
      "Step 4: Create charge on assets (Form CHG-9) for secured debentures"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Board & Shareholder Resolutions",
      "Debenture Trust Deed (for secured issues)",
      "Valuation Report (for convertible debentures)",
      "Offer Letter / Prospectus"
    ],
    timeline: "Process takes 15-30 days, including regulatory filings"
  },

  "issuance of sweat equity shares and esops": {
    title: "Issuance of Sweat Equity & ESOPs",
    subtitle: "Allotting shares to employees/directors for their value addition or as stock options.",
    intro: "We help companies draft, structure, and execute Employee Stock Option Plans (ESOPs) and Sweat Equity Share schemes to retain talent and reward exceptional performance.",
    definitionTitle: "What are ESOPs & Sweat Equity?",
    definitionText: "Sweat Equity shares are issued to employees or directors at a discount or for consideration other than cash for providing know-how or intellectual property. ESOPs give employees a right to purchase company shares at a future date at a pre-determined price.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "Attracts and retains top-tier talent without high cash outlays",
      "Aligns employee performance with company growth",
      "Boosts motivation and sense of ownership among core team members"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Draft the ESOP Scheme or Sweat Equity details and get Board approval",
      "Step 2: Obtain Shareholder approval through a Special Resolution",
      "Step 3: Issue grant letters and track vesting periods (for ESOPs)",
      "Step 4: File Form MGT-14 for the Special Resolution and Form PAS-3 (Allotment) on exercise of options"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Copy of the drafted ESOP Scheme / Sweat Equity draft",
      "Share Valuation Report by a registered valuer",
      "EGM Notice and Special Resolution minutes",
      "Allotment details (Form PAS-3 requirements)"
    ],
    timeline: "Drafting to initial approval: 10-15 days | Allotment upon vesting/exercise"
  },

  "conversion of securities": {
    title: "Conversion of Securities",
    subtitle: "Converting convertible debentures, preference shares, or other securities into equity shares.",
    intro: "FEMA and MCA lay down strict guidelines for converting convertible instruments into equity shares. We manage the valuation, compliance filings, and allotment.",
    definitionTitle: "What is Security Conversion?",
    definitionText: "It is the process of altering the capital structure of a company by converting convertible debt (CCDs) or preference shares (CCPS) into equity shares, in accordance with the terms of the issue.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Allows conversion of debt to equity without cash outflow",
      "Aligns capital structure with terms agreed during fundraising rounds",
      "Required for clean balance sheet reporting for future rounds"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Check conversion ratio and terms in the original issue agreement",
      "Step 2: Obtain fresh valuation report (if required by FDI/FEMA norms)",
      "Step 3: Convene Board meeting and pass resolution for allotment of converted equity shares",
      "Step 4: File Form PAS-3 (Return of Allotment) with ROC within 30 days of conversion"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Original Debenture Subscription Agreement / CCPS terms",
      "Board Resolution copy for allotment of conversion shares",
      "Valuation report by registered valuer / merchant banker",
      "Form PAS-3 details and file confirmation"
    ],
    timeline: "Conversion share allotment filed within 30 days of conversion date"
  },

  "series funding": {
    title: "Series Funding",
    subtitle: "End-to-end legal, regulatory, and transaction support for Series A, B, and growth funding rounds.",
    intro: "Structured equity financing rounds require detailed shareholder agreements, valuation reports, and FEMA/MCA compliance filings. We manage the process seamlessly.",
    definitionTitle: "What is Series Funding?",
    definitionText: "Series funding refers to successive rounds of equity financing (Series Seed, Series A, Series B, etc.) that help startups scale. This involves drafting term sheets, executing share subscription and shareholder agreements (SSHA), and filing return of allotment with the ROC.",
    benefitsTitle: "Key Highlights",
    benefits: [
      "Expert drafting of Term Sheets, SSHA, and custom AOA clauses",
      "Strict compliance with RBI (FDI/FEMA) and MCA guidelines",
      "Certified business valuation reporting",
      "Seamless board management and investor onboarding support"
    ],
    processTitle: "Procedure",
    process: [
      "Step 1: Negotiation & Execution of Term Sheet",
      "Step 2: Valuation report by a Registered Valuer (MCA) or Merchant Banker (FEMA)",
      "Step 3: Drafting and execution of Share Subscription and Shareholders Agreement (SSHA)",
      "Step 4: Convene EGM and pass special resolution to alter AOA and authorize share allotment",
      "Step 5: File Form MGT-14, PAS-3, and report FDI via Form FC-GPR (if foreign investor)"
    ],
    documentsTitle: "Documents Required",
    documents: [
      "Term Sheet & signed SSHA",
      "Business Valuation Certificate",
      "Audited financial statements and board resolutions",
      "FIRC and KYC proofs (for foreign direct investment)"
    ],
    timeline: "Transaction structuring: 2-4 weeks | Compliance and share allotment filing: 15-30 days"
  }
};

