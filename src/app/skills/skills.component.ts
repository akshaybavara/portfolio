import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[
      {name:"SQL Server, MySQL",percent:85,remark:'excellent', experience:'4 yrs exp.'},
      {name:"C, C#, TypeScript, JavaScipt",percent:80,remark:'excellent',experience:'3.5 yrs exp.'}, 
      {name:"AngularJS, Angular 12+, Angular Material",percent:75,remark:'vary-good',experience:'2 yrs exp.'},
      {name:"HTML, CSS, Bootstrap, Jquery",percent:90,remark:'excellent',experience:'4.5 yrs exp.'}, 
      {name:"PHP, MySQL, WordPress, SEO, Digital Marketing",percent:65,remark:'good',experience:'1.8 yrs exp.'}, 
      {name:"ASP.NET MVC, SQL SERVER",percent:70,remark:'good',experience:'2.7 yrs exp.'},
      {name:"ASP.NET Core, ADO.NET, Entity Framework",percent:50,remark:'average',experience:'1.5 yrs exp.'}, 
    ],
    tools:[
      {name:"Git, TFS",percent:70,remark:'very-good'},
      {name:"Office",percent:90,remark:'excellent'},
      {name:"Linux, Windows",percent:90,remark:'excellent'},
      {name:"MySql, SQL Server 2018",percent:90,remark:'excellent'}
    ],
    methodologies:[
      {name:"Scrum",percent:70,remark:'very-good'},
      {name:"Agile",percent:90,remark:'excellent'},
      {name:"Disign Thinking",percent:50,remark:'average'},
      {name:"DevOps",percent:50,remark:'average'}
    ]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
