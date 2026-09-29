import Header1Layout from "@/ui/layouts/Header1Layout";
import AccentedHeading1Layout from "@/ui/layouts/AccentedHeading1Layout";
import ProductCardLayout from "@/ui/layouts/ProductCardLayout";
import ServiceCardLayout from "@/ui/layouts/ServiceCardLayout";
import CTA1Layout from "@/ui/layouts/CTA1Layout";
import internalLinks from "./../../const/internalRoutes.json"

export default function Products() {
    return (
        <>
            <Header1Layout colorScheme={"colorScheme3"}
                           smallText={"OUR PRODUCTS"}
                           headingText={"Indigenous technology, engineered for India's needs."}
                           bodyText={"From sustainability and clean energy to defence and secure communication — a portfolio of 100% indigenously developed solutions, many proven in the field and exported worldwide."}/>

            <div className={"paddedContainer colorScheme2 "}>
                <div className={"maxWidthContainer outerFlexContainer"}>

                    {/*SUSTAINABILITY SOLUTIONS*/}
                    <div className={`columnFlexContainer gapS`}>
                        <AccentedHeading1Layout colorScheme={"colorScheme2"} headingText={"Sustainability Solution"}
                                                version={"green"}/>

                        <div className={`grid3 gapS`} id={"sustainabilitySolutions"}>
                            <ProductCardLayout headingText={"Hybrid Power Plant"}
                                               bodyText={"A one-of-a-kind, 100% indigenous hybrid combining Solar and Wind energy — modular, effective even at low wind speeds, and customisable for any terrain."}
                                               linkText={"View Details"}
                                               bulletPoints={["0.5kW to multiple megawatts, modular", "No masts, towers or roof penetration", "Deployed across Defence, Telecom & Industry"]}
                                               colorScheme={"colorScheme2"}
                                               version={"green"}
                                               linkUrl={internalLinks.products.hybridPowerPlant}
                            />

                            <ProductCardLayout headingText={"Carbon Capture"}
                                               bodyText={"An electro-catalytic chamber that breaks CO₂ down into pure carbon and oxygen — turning emissions into a valuable resource."}
                                               linkText={"View Details"}
                                               bulletPoints={["Captured carbon produced as graphene", "Creates a revenue stream, not just cost", "POC plant operational in Meerut", "Deployed across Defence, Telecom & Industry"]}
                                               colorScheme={"colorScheme2"}
                                               version={"green"}
                                               linkUrl={internalLinks.products.carbonCapture}
                            />

                            <ProductCardLayout headingText={"Ambient Air Purification"}
                                               bodyText={"Next-generation outdoor air purification from IIT Delhi — waterless and filterless, for sustainable, low-maintenance clean air."}
                                               linkText={"View Details"}
                                               bulletPoints={["No water, no filters, low maintenance", "25–40% AQI improvement (Delhi field trial", "Ideal for pollution hotspots & industrial hubs", "Helps avoid GRAP economic losses"]}
                                               colorScheme={"colorScheme2"}
                                               version={"green"}
                                               linkUrl={internalLinks.products.ambientAirPurification}
                            />

                            <ProductCardLayout headingText={"Waste to Hydrogen"}
                                               bodyText={"An indigenous process that converts waste into clean hydrogen, metal carbonates and activated charcoal — turning disposal into resource recovery."}
                                               linkText={"View Details"}
                                               bulletPoints={["Clean hydrogen fuel from waste", "Valuable metal-carbonate by-products", "Charcoal upgradable to graphene", "Tackles stubble-burning & municipal waste"]}
                                               colorScheme={"colorScheme2"}
                                               version={"green"}
                                               linkUrl={internalLinks.products.wasteToHydrogen}
                            />

                            <ProductCardLayout headingText={"Plastic to Diesel"}
                                               bodyText={"A pyrolysis reactor with catalytic hydro treatment that converts plastic waste into certified high-speed diesel and carbon nano materials."}
                                               bulletPoints={["India’s first policy-recognised solution", "8,000–24,000 L ULSD per day (80% yield)", "BS6 / Euro 6 compliant, < 8 ppm sulphur", "Designed as a carbon net-zero process"]}
                                               linkText={"View Details"}
                                               version={"green"} colorScheme={"colorScheme2"}
                                               linkUrl={internalLinks.products.plastictoDiesel}/>
                        </div>
                    </div>

                    {/*DEFENCE SYSTEMS*/}
                    <div className={`columnFlexContainer gapS`}>
                        <AccentedHeading1Layout colorScheme={"colorScheme2"} headingText={"Defence Systems"}
                                                version={"blue"}/>
                        <div className={`grid3 gapS`}>
                            <ProductCardLayout headingText={"UAV & UCAV"}
                                               bodyText={"Indigenously developed unmanned aerial and unmanned combat aerial vehicles for surveillance, reconnaissance and mission-critical defence operations."}
                                               linkText={"View Details"}
                                               bulletPoints={["Built for surveillance & combat roles", "Indigenous design and manufacture", "Suited to defence & border security", "Detailed specifications on request"]}
                                               colorScheme={"colorScheme2"}
                                               version={"blue"}
                                               linkUrl={internalLinks.products.uavAndUcav}/>
                        </div>

                    </div>

                    {/*COMMUNICATIONS*/}
                    <div className={`columnFlexContainer gapS`}>
                        <AccentedHeading1Layout colorScheme={"colorScheme2"} headingText={"Communication"}
                                                version={"saffron"}/>
                        <div className={`grid3 gapS`}>
                            <ProductCardLayout headingText={"Private 5G Networks — RDN Box"}
                                               bodyText={"A compact, self-contained private 5G hub integrating RAN, Core and an AI engine — plug-and-play, deployable anywhere in minutes."}
                                               linkText={"View Details"}
                                               bulletPoints={["Built for surveillance & combat roles", "Indigenous design and manufacture", "Suited to defence & border security", "Detailed specifications on request"]}
                                               colorScheme={"colorScheme2"}
                                               version={"saffron"}
                                               linkUrl={internalLinks.products.private5g}/>
                        </div>
                    </div>


                </div>
            </div>

            <div className={"colorScheme2 outerFlexContainer paddedContainer"}>
                <div className={`maxWidthContainer columnFlexContainer gapS`}>
                    <ServiceCardLayout capsuleText={"DEFENCE"} headingText={"UCAV & UAV Consultation"}
                                       bodyText={"Technical insight for high-stakes decision-making — guiding defence and government clients through the full lifecycle of unmanned aerial platforms."}
                                       linkText={"Related: UAV & UCAV platforms"}
                                       bulletPoints={["Platform selection & procurement — strategy guidance matched to mission requirements and budgets.", "Regulatory compliance support— navigating certification and airspace regulation.", "Operational integration expertise — embedding unmanned systems into existing operations."]}
                                       colorScheme={"colorScheme2"} version={"blue"}
                                       navigationUrl={internalLinks.products.uavAndUcav}
                                       id={"defence"}/>

                    <ServiceCardLayout capsuleText={"SUSTAINABILITY"} headingText={"Waste-to-Energy Solutions"}
                                       bodyText={"Turning waste liabilities into reliable power generation — for municipalities, industrial clients, and energy developers."}
                                       linkText={"Related: Waste to Hydrogen"}
                                       bulletPoints={["Feasibility studies & technology selection — grounded assessment of the right conversion pathway.", "Regulatory navigation — permits, compliance and policy alignment.", "Project implementation support — from pilot to full commercial operation."]}
                                       colorScheme={"colorScheme2"} version={"green"}
                                       navigationUrl={""}
                                       id={"sustainabilitySolutions"}/>

                    <ServiceCardLayout capsuleText={"COMMUNICATION"} headingText={"Communications Solutions"}
                                       bodyText={"Resilient, secure infrastructure for mission-critical operations — serving defence, government, and commercial clients."}
                                       linkText={"Related: Private 5G Networks"}
                                       bulletPoints={["Network design for mission-critical operations — engineered for reliability under pressure.", "Systems integration — connecting new capability with existing infrastructure.", "Interoperability planning — ensuring systems, agencies and vendors work as one."]}
                                       colorScheme={"colorScheme2"} version={"saffron"}
                                       navigationUrl={internalLinks.products.uavAndUcav}
                                       id={"communication"}/>
                </div>
            </div>
            <CTA1Layout colorScheme={"colorScheme3"}
                        headingText={"Want a detailed brief or a technology demonstration?"}
                        bodyText={"Our specialists will walk you through specifications, deployment models and pilot programmes."}/>
        </>
    )
}
