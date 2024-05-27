import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import { A11y, Navigation, Scrollbar } from 'swiper/modules'

const AboutPageSlider = () => {

  const projects = [
    {
        index: 1,
        project: "Jinvali HPP",
        client: "Georgian water and power",
        implemented: "September January 2020",
        tasks: "Preparation corporative biodiversity management plan"
    },
    {
        index: 2,
        project: "Akhmeta HPP",
        client: "Geo energy LTD",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 3,
        project: "Bodorna HPP",
        client: "Bodorna LTD",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 4,
        project: "Debeda HPP",
        client: "Hydro Georgia LTD",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 5,
        project: "Gori Wind farm",
        client: "Kartli wind power plant",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 6,
        project: "Saguramo HPP",
        client: "Saguramo energy",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 7,
        project: "Jinvali HPP",
        client: "Georgian water and power",
        implemented: "September January 2020",
        tasks: "Biodiversity assessment and Alien Invasive Species Management Plan"
    },
    {
        index: 8,
        project: "Lajanuri 1,2 HPP",
        client: "Aquahidroenergy LTD",
        implemented: "January-October, 2020",
        tasks: "Results of additional biodiversity studies in „Lajanuri 1“and „Lajanuri 2“HPPs project corridor and feasibility of activities on Racha-Lechkhumi emerald candidate site GE0000058"
    },
    {
        index: 9,
        project: "Lajanuri 3 HPP",
        client: "Aquahidro LTD",
        implemented: "January – April 2020",
        tasks: "Preparation environmental screening document"
    },
    {
        index: 10,
        project: "Anaklia port Access Road and Railway",
        client: "Mshenproeqti LTD",
        implemented: "Jun 2019-january 2020",
        tasks: "Preparation EIA document"
    },
    {
        index: 11,
        project: "juta + 3,9 – junction 01, Archilo – Shatili - Lot 1 & Lot 2, Patara Borbalo – Archilo - Lot 1 &Lot 2, Patara Borbalo – Omalo – Lots 1,2,3,4,5",
        client: "JSC institute IGH",
        implemented: "August December 2020",
        tasks: "Preparation of Project impact assessment report on Emerald sites „Archilo “(Code: GE0000002) and Tusheti (Code: GE0000008)"
    },
    {
        index: 12,
        project: "Upper Imaret Racha road project, Khevi –Uzumta, - Shqmeri – Zudali km 29 - 40 section Lot V road project",
        client: "New Road LTD",
        implemented: "September 2019 - January 2020",
        tasks: "Preparation of Project impact assessment report on Emerald site „Racha 4“(Code: GE0000042)"
    },
    {
        index: 13,
        project: "Batumi –Akhaltsikhe Road project, Khulo – Goderdze (KM 80 -110) Section Lot 1 and Goderdze –Zarzma (KM 110-127) Section Lot 2",
        client: "Todini construction Generally",
        implemented: "January 2019 – March 2020",
        tasks: "Preparation biodiversity management and monitoring plans"
    },
    {
        index: 14,
        project: "Lentekhi mestia road project",
        client: "JSC institute IGH",
        implemented: "August September 2019",
        tasks: "Preparation of Project impact assessment report on Emerald site „Svaneti 2“ (Code: GE0000045)"
    },
    {
        index: 15,
        project: "“Khelra” HPP",
        client: "Aqua hydro LTD",
        implemented: "June August 2019",
        tasks: "Preparation of Environmental Screening document"
    },
    {
        index: 16,
        project: "“Nakra” HPP",
        client: "Aqua hydro LTD",
        implemented: "April June 2019",
        tasks: "Preparation of Environmental Screening document"
    },
    {
        index: 17,
        project: "Upper Imaret Racha road project, Khevi –Uzumta, - Shqmeri – Zudali km 20-29 section Lot IV road project",
        client: "Peri LLC",
        implemented: "September November 2019",
        tasks: "Preparation of Project impact assessment report on Emerald site „Racha 4“(Code: GE0000042)"
    },
    {
        index: 18,
        project: "Gurjaani (Chumlakhi)_Telavi bypass road section (30 km)",
        client: "Georgian road department",
        implemented: "2019 January",
        tasks: "Preparation of Project impact assessment report on Emerald site „Gombori“ (Code: GE0000027)"
    },
    {
        index: 19,
        project: "Chumateleti-Khevi Section of E-60 Highway",
        client: "Georgian road department",
        implemented: "Jun - December 2018",
        tasks: "Environmental and Social Impact Assessment of Works for the Improvement of Chumateleti-Khevi Section of E-60 Highway"
    },
    {
        index: 20,
        project: "Moliti-Phona-Chumateleti road section 24+620Km-50+244Km",
        client: "Kocks Consult GmbH Georgian Branch",
        implemented: "2018 April",
        tasks: "Preparation of Project impact assessment report on emerald site „Borjom_Kharagauli“ (Code: GE0000056)"
    },
    {
      index: 21,
      project: "Mtskheta-Stefantsminda-larsi road section 132-Km135 Km",
      client: "Roads Department of the Ministry of Regional Development and Infrastructure of Georgia",
      implemented: "2018 August- October",
      tasks: "Preparation of Environmental screening document and EIA procedure"
  },
  {
      index: 22,
      project: "Daba Abastumani waste water treatment plat (WWTP)",
      client: "Municipal Development Fund of Georgia (MDF)",
      implemented: "2018 July",
      tasks: "Preparation of Environmental screening document and EIA procedure"
  },
  {
      index: 23,
      project: "Arrangement and operation of inert materials processing and manufacturing concrete manufacturing plant, in Batumi",
      client: "Folat oil iafi sanaii ve tijareti branch in Georgia",
      implemented: "2018 August",
      tasks: "Preparation of Environmental screening document"
  },
  {
      index: 24,
      project: "Aspalt plant",
      client: "New road LTD",
      implemented: "2018 June",
      tasks: "Preparation of Environmental screening document"
  },
  {
      index: 25,
      project: "Construction of Light Crude Oil Processing Plant in Kulevi",
      client: "Ltd Fasis Oil, Financed by: IFC",
      implemented: "2017 July –present",
      tasks: "Preparation of Environmental and Social Impact Assessment (ESIA) and Environmental and Social Management Plan for the project. Conducting of public consultations according to the IFC/WB requirements"
  },
  {
      index: 26,
      project: "EIA 'Lukhra' HPP",
      client: "Eco hydro plus LTD",
      implemented: "2017 March – 2017 September",
      tasks: "Preparation of Environmental and Social Impact Assessment (ESIA) and preparing Environmental and Social Management Plan"
  },
  {
      index: 27,
      project: "EIA 'Nakra' HPP cascade",
      client: "Eco hydro plus LTD",
      implemented: "2017 Juley – 2017 December",
      tasks: "Preparation of Environmental and Social Impact Assessment (ESIA) and preparing Environmental and Social Management Plan"
  },
  {
      index: 28,
      project: "Kvemo Bolnisi Copper and Gold Exploration Project",
      client: "Georgian Copper and Gold Limited",
      implemented: "2016 December – 2017 July",
      tasks: "Preparation of Environmental and Social Audit of territory and preparing Environmental and Social Management Plan. Village Kvemo Bolnisi of Bolnisi Municipality"
  },
  {
      index: 29,
      project: "Construction of Tbilisi Solid Waste Recycling Factory by KDV Technology",
      client: "Ltd KDV Georgia. Financed by: IFC",
      implemented: "July 2016 – February 2017",
      tasks: "Preparation of Environmental and Social Impact Assessment (ESIA) and preparing Environmental and Social Management Plan for the Construction of Tbilisi Solid Waste Recycling Factory by KDV Technology; conducting public consultations according to IFC/WB requirements"
  }
];

  return (
    <div style={{ width: '80vw', margin: '0' }}>
      <Swiper
        className="swiper"
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={100}
        navigation
        slidesPerView={3}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
      >

      {projects.map((project, index) => (
          <SwiperSlide key={index} className="swiper-slide">
              <p><strong>Project:</strong> {project.project}</p>
              <p><strong>Client:</strong> {project.client}</p>
              <p><strong>Implemented:</strong> {project.implemented}</p>
              <p><strong>Tasks:</strong> {project.tasks}</p>
              <p className='projects-index'> {project.index}</p>
          </SwiperSlide>
      ))}
 
      </Swiper>
    </div>
  )
}

export default AboutPageSlider
