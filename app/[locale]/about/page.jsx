import ContextContainer from "@/components/contextContainer/container";
import { Badge, List } from "flowbite-react";
import { HiCheck } from "react-icons/hi"

function AboutPage() {
    return (
        <div className="w-4/5 sm:w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-start">About AJSDO</h1>
                    <div className="flex flex-col justify-start text-justify">
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Afghanistan Justice and sustainable Development Organization (AJSDO)</p>
                        <p className="text-sm sm:text-lg text-[#3c3744]">
                            Afghanistan Justice and Sustainable Development Organization (AJSDO) as a social, non-governmental and non-profit organization regardless of political ethnic, racial, positional affiliations, provides voluntary and humanitarian services to the needy people of the society.
                        </p>
                        <p className="text-sm sm:text-lg text-[#3c3744]">
                            AJSDO is an afghan local and licensed NGO registered by (5575) registration number in ministry of Economic in 2022.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-start gap-5">
                    <div className="flex flex-col justify-start">
                        <p className="text-sm sm:text-lg font-bold text-[#3c3744]">Our core areas of action include the following five activities:</p>
                        <ol className="list-disc px-5 sm:px-10 text-[#3c3744] text-sm sm:text-lg">
                            <li>Support women in (Economic, Social and civil) sections.</li>

                            <li>
                                Educational services for needy people.
                            </li>
                            <li>Scientific capacity building in science and educational consultation sections.</li>
                            <li>Public advertisement at health and mental services.</li>
                            <li>Providing educational and social services for displaced and immigrants people.</li>
                        </ol>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-start">Core Values</h1>
                </div>
                <div className="flex flex-wrap gap-2 justify-center text-justify">
                    {/* <div className="flex flex-wrap gap-2"> */}
                    <Badge icon={HiCheck} size="md" className="px-3 py-2">Equity</Badge>
                    <Badge icon={HiCheck} size={"md"} className="px-3 py-2">Social Justice</Badge>
                    <Badge size="md" icon={HiCheck} className="px-3 py-2">Accountability</Badge>
                    <Badge size="md" icon={HiCheck} className="px-3 py-2">Sustainability</Badge>
                    <Badge size="md" icon={HiCheck} className="px-3 py-2">Collaboration</Badge>
                    {/* </div> */}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-start">AJSDO Objective</h1>
                    <div className="flex flex-col justify-start text-justify">
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Education:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>Increase access to quality education for underprivileged children and youth.</List.Item>
                            <List.Item>Enhance educational infrastructure and resources in marginalized communities.</List.Item>
                            <List.Item>Improve literacy rates and promote lifelong learning opportunities for all.</List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Healthcare:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>Provide accessible and affordable healthcare services to deprived people.</List.Item>
                            <List.Item>Improve health outcomes by focusing on preventive care, treatment, health and education.</List.Item>
                            <List.Item>Collaborate with local healthcare providers and organizations to strengthen healthcare systems.</List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Social Services:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>Offer comprehensive social services, including livelihood support, shelter, and counseling.</List.Item>
                            <List.Item>Promote social inclusion and empower marginalized individuals and communities.</List.Item>
                            <List.Item>Facilitate skill development programs and vocational training to enhance livelihood opportunities.</List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Poverty Alleviation:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>Implement poverty reduction programs that address the root causes of poverty.</List.Item>
                            <List.Item>Foster economic empowerment through income-generating activities and entrepreneurship support.</List.Item>
                            <List.Item>Advocate for policies and initiatives that promote social and economic equality.</List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Advocacy and Awareness:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>
                                Raise awareness about the rights and needs of underprivileged populations.
                            </List.Item>
                            <List.Item>
                                Advocate for policies and programs that prioritize education, healthcare, and social welfare.
                            </List.Item>
                            <List.Item>
                                Engage in public discourse to influence positive change and address social disparities.
                            </List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Partnership and Collaboration:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>
                                Establish strategic partnerships with governmental, non-governmental, and community-based organizations.
                            </List.Item>
                            <List.Item>
                                Collaborate with stakeholders to leverage resources, share best practices, and maximize impact.
                            </List.Item>
                            <List.Item>
                                Engage volunteers and mobilize community participation for sustainable development.
                            </List.Item>
                        </List>
                        <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">Monitoring and Evaluation:</p>
                        <List className="px-5 sm:px-10">
                            <List.Item>
                                Regularly monitor and evaluate program effectiveness and impact.
                            </List.Item>
                            <List.Item>
                                Collect and analyze data to inform evidence-based decision-making.
                            </List.Item>
                            <List.Item>
                                Continuously improve programmatic interventions based on lessons learned and feedback.
                            </List.Item>
                        </List>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;