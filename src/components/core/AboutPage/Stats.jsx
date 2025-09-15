import React from 'react'

const Stats = () => {
    const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];
  return (
    <div>

    <section>
        <div>
            <div>{
                Stats.map( (data, index) => {
                        return (
                            <div key={index}>
                                <h1>
                                    {data.count}
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
            }

            </div>
        </div>
    </section>
      

    </div>
  )
}

export default Stats