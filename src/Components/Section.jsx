import React from 'react';

export const Section = () => {

    let softwaresUse = [
        {
            "title": "Visual Studio Code",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiULeTGawBsUxJNhGZzLAV5LggV5QAr7fzQ&s",
            "link": "https://code.visualstudio.com/"
        },
        {
            "title": "Github Version Control",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0L-BfSvRBh70gABbYfuAn9OwLae2ccBLOTA&s",
            "link": "https://github.com"
        },
        {
            "title": "Leetcode",
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAABKVBMVEUAAAD/////oRazs7O2trakpKQRERGEhIT/oxb/pRf/pxf5+fn/ngD/qRe5ubngjhMsLCyTk5Pn5+fc3NxCQkL5nRbOghKbYg0fFAOsbQ+4dBDCexHLy8taWlqtra2WlpY8PDxRMwf/+vLLxb3vlxX/xHeJVww7JQWnag54TAuEVAsSDAGUXg0sHASdlYoeHh5mZmbDw8NycnKAgIBNTU0ZGRlMU1npuHdqQgkiFgP/x4NHLgb/2KczIQX/37T/6slGQTqtp57/8uKHfGz/rkDbyrAqIA//uVlZOAhtRQqNfGM/NSZDIQBmX1Wvmn0cDgA3My3q4tYnIhrb0sKQiX5iVkW7tKm2p5E6LxrOup2/qYiHcVBJPSmCc1v/qTN5b2H/2avprWH/0pROROtxAAAGyElEQVR4nO2ceVvTWBSHm5RCFkugkHQJaxtaSiki4AiiQkFRx0HZBmdGRka//4eYFlmanJOQrb03ec77d5Ln/J6z3O3cZDIEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEkUomtqYnWNswQNbnZwR1ZmyWtR2DYq4g3FCYZG3JYJgX7lBTqTArPFBIYZTm1D6Bwjxrc2InJ9h49pS1QTGzodoFFhZYWxQvk4KQaoGbBafAdIXolurUJ4yxtilOtoD/hKlp1kbFyCzUJ+RYGxUj01NQX5pGwedQnzrO2qg4mYH+S9NEdALqU9MUn7YJ9i1Z1jbFyTjUN5WmBX0O0ZeiAXB0DuqbSZG+zDycoD17ztqoGJmE+qZSNcOG8an+xtqmGNmE/qu+MOvbizusLYuHDTjBrr58IsuKaDZ3WRsXA+vIAuKlJPaQRc2ss7YvKk8R/y09EW+RJN1MthcXYP4JL+/13WhUKiXWVoZnApmgvZJEO0rlNWs7w7IwBR34RhadSNoqa0tDgiwA98QnQKAo6UXWpobhDKmfe98Rfb0wNZKXiPs1JP9gfN4iax9YGxyUDtR3oOD+uwlT6yNri4NxWIX63rrr6yViogb9d9B/1Z4+qYeLRMX4wtpsvxxh8fm+OwHVNaOLJct4MhpJScQ1JD6XdLNY/7hbarcb2/ViRcckyloyEvF3JD7z5m7/8ujLblnEQlU3mFntn09Qn/DiD/DYBw0N03KLgcmBOD6F/vuMlY9SBc1EszF0kwNxDScw6ho+Tykt60iYyhrXK6gTWF+ENdenmyLiRNnieETch/LUjtcLFSxKFYPXML2C+efhvx4tVKGsDcnggJxdQn21E+932ss65sOV4VgckK9Q3/mjVb/VzGOLYA43FUtIfJ76eXHXhC6UKoM2NzBYfJ6e+Xp1pwzCVDIHbG5gMH3n+z5f7oaps8xwJ/AQ6qt+8v/6qiLx7cELRN9RkA98dExNlwdlaShax1Bf4c9g32hX+nwoaXxtliILwOph4K8UH1ZQeb7GwWO4wasG15fJrFi/RkRJKsduYxSQ+BQ+h/rSjqFLkixafPkvAwcI9WvYb62Ypllsx2lddJAdCs8FRNIowRVuh/tthyCsAX011ibFyj6YYl+yNilegANPA0zQEgBwYC1d+jLXDn1THC5UI9Gx66v+xdqguHFEqOcO02gohqXEBbu+g333JzdyIZlk2bjX8OvA6fnxkWwoRkayDK8YfrZn4LXbc7MjIeXdSJwbY+bEv+0ldMvlselcBH1dxjeGqqqPc5vAGbdN3rFo+roMVVUf9iI647ILMzEfVeA4qzT0J3A6F9WBI6zuyDgEuuzzxiCQ1SUZfzkYtcZ0BW4OV9c9/9gEFo7xp55ORs5BVuPEN/s46LaVthHVgeyucdlnMjWXKjMadZxwG2AHj33Ht7rv8tjEs7AztZ7/suvDE+TEXmXct9NG13NzI6HIzo2xvKbm2LHwWA+Ozm6OhWBzY2F4ahCcu9q15LXuenPi3JPxbqpIIKDz9TJlPrxylJn0+fDCeXbm3dqUPI7A2YR6wdqmePnmFJiy0yX0fLDD1xF7RLAT3nSdwMATtLC1tMTnGNNCupxCjIeLRl5R8lzeLTjCfBg0Sld/tf9KIpe37TAfBqqljfJDG1CRwyOqVgdReH7l+/2SraWSx6btE+Q6nXDpu12tqPS3GlZ4vMX0CVNY89lvYdPHXafaLUeYwo6fdGoVHd2iFp9XJ86wPBz34cNVZ7+vxeu1AqTrUKg91lZZMhSHPsngrJnrAaTvXjh4xIcmaLqX+b2hVQpcS0H+ddGbQzM4MGdoLfWoNCD/unDWTWmnheah6/WXsrPdvsv2MO0NwQWmED9YaxSd9UWULC6nojZQH/6LPNgw4P3BRNw2x2be53Boa5lQH2fd2m50oMDqj1X74Fba1sD4IHF2XcKdLIzSn3mjef+jqtZi04R/DEhC/t0BK82b75KuGWZ5daVeNg0Nu9yaiPy7Ayjc+37zpwdR13VRktH/PXA9/gGuHTveyL+A7MjJ0gcqzU+vf5H04O9K5GPYFFbfewvUi3zuGHrR6s/DxyI0afH5i+P7g5n/PP0n8bx+8OTq3UEvPPeWvPUl7X9HfSz++Pnq1ZLsqU9OsL7efrwieZcXpcLjZn0AGhb205G76BStpKbfA6264fKnKknReLssGI5G3bTg7Ey2zCKfG6Ah2Gk0tXyfRklW9JUGh4csUXi9rGnWLVp5kbU5g6HVft1otJM3KyMIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIdPI/lCad3C419Z0AAAAASUVORK5CYII=",
            "link": "https://code.visualstudio.com/"
        }
    ]

    return (
        <>
            <section className="relative flex flex-col sm:flex-row items-center justify-around bg-gradient-to-r from-blue-50 via-white to-blue-100 px-8 py-16 shadow-2xl rounded-xl overflow-hidden">
                <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-2xl opacity-20"></div>

                <div className="sm:w-1/2 text-center sm:text-left z-10">
                    <h1 className="text-blue-800 font-extrabold text-5xl sm:text-6xl leading-tight mb-4">
                        Paresh Mistry
                    </h1>
                    <h3 className="text-gray-700 text-2xl sm:text-3xl font-semibold mb-6">
                        Full Stack Web Developer
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Passionate about crafting elegant coding architectures and an avid
                        contributor to open-source projects. Let's build something
                        extraordinary together!
                    </p>
                    <a
                        href="/MyResume.pdf"
                        download="MyResume.pdf"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="sm:w-1/3 mt-10 sm:mt-0 flex justify-center relative z-10">
                    <div className="relative">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3001/3001764.png"
                            alt="Profile"
                            className="w-52 h-52 rounded-full border-4 border-blue-400 shadow-xl"
                        />
                        <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold">
                            Hi!
                        </div>
                        <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-full blur-xl"></div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-50 opacity-20 rounded-lg pointer-events-none"></div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-16">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
                            My Software Tools
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {softwaresUse.map((element) => (
                            <a
                                href={element.link}
                                key={element.title}
                                className="group transform transition-transform duration-500 hover:scale-105"
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500 hover:shadow-2xl">
                                    <img
                                        src={element.image}
                                        alt={element.title}
                                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-6 left-6 text-white font-bold text-2xl z-10 tracking-wide drop-shadow-md">
                                        <h3>{element.title}</h3>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-white bg-black/70 px-4 py-2 rounded-lg text-sm shadow-lg">
                                            Click to Learn More
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
};
