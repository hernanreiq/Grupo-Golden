import React from "react";

export function ComingSoonTemplate(projectsLength) {
    var result = [];
    var indexLimit = 2;
    if ((projectsLength % 3) === 0 || projectsLength === 0) {
        indexLimit = 3;
    } else if ((projectsLength % 2) === 0) {
        indexLimit = 1;
    }
    for (var i = 0; i < indexLimit; i++) {
        var photo = require(`../../img/coming-soon/coming-soon (${i + 1}).png`);
        result.push(
            <div className="col my-2" key={i}>
                <div className="project-container p-3">
                    <h4 className="text-center">PRÓXIMAMENTE</h4>
                    <img src={photo.default} alt="PRÓXIMAMENTE" className="shadow" />
                    <button className="btn-project my-3 shadow">EN DESARROLLO</button>
                </div>
            </div>
        )
    }
    return result;
}