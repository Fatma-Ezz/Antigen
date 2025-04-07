import React, { useState } from 'react';

const Diet = () => {
  const diets = [
    {
      name: 'Anti-Inflammatory Diet',
      details: {
        brief: 'Focuses on reducing inflammation, beneficial for autoimmune conditions.',
        benefits: [
          'Reduces chronic inflammation and cytokines (PMC8706441)',
          'Improves gut microbiome and immune function (PMC8620243)',
          'Alleviates symptoms like fatigue and joint pain (PMC10381948)',
        ],
        downsides: ['Possible nutrient deficiencies', 'Challenging restrictions'],
      },
      link: 'https://www.tandfonline.com/doi/abs/10.1080/07315724.2015.1080105',
    },
    {
      name: 'Pregnant & Breastfeeding Women',
      details: {
        brief: 'Supports fetal development and maternal health.',
        benefits: [
          'Enhances nutrient supply for the baby (PMC5084016)',
          'Prevents gestational complications',
        ],
        downsides: ['May lead to excessive weight gain', 'Requires close planning'],
      },
      link: 'https://www.mdpi.com/2072-6643/8/10/629',
    },
    {
      name: 'Low Dairy/Gluten Diet',
      details: {
        brief: 'Reduces or eliminates dairy and gluten for intolerance or allergies.',
        benefits: ['Improves digestion (PMC4827614)', 'Reduces discomfort'],
        downsides: ['Risk of missing calcium and B12 (PMC5439366)', 'Can be restrictive'],
      },
      link: 'https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=13368672&AN=134816678&h=amg%2B1b97DO7QeU6eORBd6fK2AxvttCFobA5ym%2F%2BUkecZzrxXCBMMFVdrCucXqV5if7553VAek%2FtxQ6J57UX66w%3D%3D&crl=c',
    },
    {
      name: 'Diabetes-Friendly Diet',
      details: {
        brief: 'Aims to control blood glucose levels through careful food choices.',
        benefits: [
          'Improves insulin sensitivity and blood sugar control (PMC7095670)',
          'Reduces risk of diabetes-related complications',
        ],
        downsides: ['Requires strict adherence and consistent monitoring'],
      },
      link: 'https://www.mdpi.com/2304-8158/13/20/3276',
    },
    {
      name: 'Mediterranean Diet',
      details: {
        brief: 'Emphasizes whole foods and heart-healthy fats.',
        benefits: [
          'Lower risk of cardiovascular diseases and stroke (NCBI)',
          'Better blood sugar control and reduced diabetes risk (PubMed)',
          'Improved cognitive health',
        ],
        downsides: ['May include wine, not ideal for all individuals', 'Risk of excess calories from fats'],
      },
      link: 'https://www.sciencedirect.com/science/article/pii/S0033062018300744',
    },
    {
      name: 'Ketogenic Diet',
      details: {
        brief: 'A high-fat, very low-carb diet designed to promote fat-burning by entering ketosis.',
        benefits: [
          'Encourages weight loss and appetite control (PMC8153354)',
          'Enhances blood sugar regulation in type 2 diabetes (PMC8322232)',
          'Offers neurological benefits in epilepsy (NCBI)',
        ],
        downsides: ['Risk of nutrient deficiencies', 'Initial side effects like “keto flu” (PMC7480775)', 'Possible long-term cardiovascular risks'],
      },
      link: 'https://www.sciencedirect.com/science/article/pii/S0920121111002117',
    },
    {
      name: 'DASH Diet (Dietary Approaches to Stop Hypertension)',
      details: {
        brief: 'Aims to reduce high blood pressure through a heart-healthy approach emphasizing low-sodium foods.',
        benefits: [
          'Lower blood pressure significantly (PMC10551663)',
          'Support cardiovascular health (PMC7499347)',
          'Improve cholesterol levels',
        ],
        downsides: ['Can be difficult to maintain long-term', 'Requires taste adjustment due to lower salt intake'],
      },
      link: 'https://link.springer.com/article/10.1007/s11883-003-0039-5',
    },
    {
      name: 'Paleo Diet',
      details: {
        brief: 'Encourages eating habits similar to those of early humans, avoiding modern processed foods.',
        benefits: [
          'Aids weight loss and reduces inflammation (PMC10574054)',
          'Improves blood glucose levels (PMC7073984)',
          'Enhances lipid profiles and blood pressure (PMC6628854)',
        ],
        downsides: ['Nutritional gaps due to excluded food groups (PMC2787021)', 'Social and practical challenges in long-term adherence'],
      },
      link: 'https://www.sciencedirect.com/science/article/pii/S004896972101785X',
    },
    {
      name: 'Plant-Based Diet',
      details: {
        brief: 'Emphasizes whole, minimally processed plant foods while avoiding animal products.',
        benefits: [
          'Reduces risk of chronic diseases (PMC5466942)',
          'Improves gut health and lowers inflammation (PMC8360995)',
          'Supports weight management',
        ],
        downsides: ['Risk of nutrient deficiencies (e.g., B12, iron)', 'Requires careful planning'],
      },
      link: 'https://www.mdpi.com/2071-1050/12/10/4136',
    },
    {
      name: 'Healthy Weight Gain Diet',
      details: {
        brief: 'Designed to promote weight gain through calorie-dense, nutritious foods.',
        benefits: [
          'Supports healthy muscle mass gain',
          'Improves energy levels and nutrient stores',
        ],
        downsides: ['Risk of gaining fat instead of lean mass', 'May require high meal frequency'],
      },
      link: 'https://www.cambridge.org/core/journals/public-health-nutrition/article/diet-nutrition-and-the-prevention-of-excess-weight-gain-and-obesity/6DB071DD5989F7D0096DD70B0EEDC77B',
    },
  ];

  const [activeDiet, setActiveDiet] = useState(null);

  const toggleDiet = (index) => {
    setActiveDiet(activeDiet === index ? null : index);
  };

  return (
    <div className="p-4 bg-center bg-cover text-white" style={{ backgroundImage: "url('/assets/backgroundfinal.png')" }}>
      <h1 className="text-3xl font-bold mb-6 text-center">Diet</h1>
      <div className="space-y-4">
        {diets.map((diet, index) => (
          <div key={index}>
            <button
              onClick={() => toggleDiet(index)}
              className="text-left w-full bg-[#822c5c] text-white py-2 px-4 rounded hover:bg-[#630e43] transition"
            >
              {diet.name}
            </button>
            {activeDiet === index && (
              <div className="p-4 border rounded mt-2 shadow bg-lightPink text-black">
                <p><strong>Brief:</strong> {diet.details.brief}</p>
                <p><strong>Benefits:</strong></p>
                <div className="pl-5">
                  {diet.details.benefits.map((benefit, bIndex) => (
                    <p key={bIndex}>• {benefit}</p>
                  ))}
                </div>
                <p><strong>Downsides:</strong></p>
                <div className="pl-5">
                  {diet.details.downsides.map((downside, dIndex) => (
                    <p key={dIndex}>• {downside}</p>
                  ))}
                </div>
                <a
                  href={diet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-[#630e43] underline"
                >
                  Read more on Google Scholar
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Diet;

