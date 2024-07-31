import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string;
  age : number;
  email : string;
  imagePath : string;
  fname : string;
  flag : boolean;
  vehicles : string[];
  selectedVehicle : string;
  myStyle :{};
  myClass : string;
  
  constructor(){
    this.name = "bitcher";
    this.age = 38;
    this.email = "bitcher@gmail.com";
    this.imagePath = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUSExMWFhUXGRYZGBgXGBcYHRcdIB0YGBoYICEaHiggGiImHhkZITEiMSkrLy4uGB8zODMtNygtLisBCgoKDg0OGxAQGy4lHyYtLTUtLy8vKy04MC01LS0rLTA3LS0tLTAtLS8vLS8tLS8uLS0tKy0tLSstKy0rLTUtNf/AABEIAMgA/AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABOEAACAQMCAwUEBQUNBgUFAAABAgMABBESIQUGMRMiQVFhBzJxgRQjQlKRFjNTcqEVQ1RiZIKSk5SisdLTFySys8HRCDXD4fE0Y3ODwv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAxEQACAgEDAQUHBAIDAAAAAAAAAQIDEQQhMRJBUWFx8AUTIjKBscEjkaHR4fEUFVL/2gAMAwEAAhEDEQA/AO40pSgFKUoBUBztwia5tisD6JkYSR5JCuRkdm+CO6wJHoSG6ip+lAcL4Dxm+idxbXDpKhxNY3peUIdvdYnWq+IYEg5GcdKuFp7VIo9r+2ltT4yKO3hO+B3kGoZ8tNT3N/JNpf4d9UU6fm7iI6ZF9M/aXc7HzOMZzXKvpd/aqxu4u2hR5Y2nhHeTQ7RkyR+AOnVqG2COuanKGH2HaOD8w2d0M29xFL5hHBI+I6j5ipOuCScu8PulWaIBSd1lgOgg9c7bZz5jIrbs+a+LcLIMrm+sx7xb89EPPV1PzJG32etMEZO4UrQ4HxiC7gS4gcPG4yCPDzBHgQdiK36gkUpSgFKUoBSlQPMXN9lZ5E0vfCluzQF30/eKr7q7e82B60BPUrU4Tf8AbwpMI5Iw41BZAFcA9MgE4yN8Z8a26AUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAVQrY/71fr4C5XHpm3tmP7ST86vtc54FL2jXc46S3U5X1WPTbg/Psc/OudvymnSr9QheMcpMjtc2GI5Du8BOIp/PbpG/kw288ZJrDw3iCzK3dKOp0yRuMNG3irD/AAPQirrUBzJwVnIubcAXKDGM4E6dTEx/4W+yceGapXbjZnbUaZP4o8ld4NfNwa5M6ZNhMQLiIZPYMdhMo8vAgeG33cdwikVgGUgggEEHIIO4I865BbzRzxZxlHBBVh8VZGB8QcqR5g1N+zXihgc8MlbKYZ7RmOSUG7wHPjHnI65Q+GmtLR56Z0alRvHeO2tnH2txKsa9Bnqx+6qjvOfQAmubcw8639yrC3ilgh6ALgXE233j3LUb77l9tsGqkl15p51trPKbyzjGIU3OTsoYjOnUeg3Zt9KtipTl5rowK90FWZ+8yL0iz0jz9oqMAnO5zjbArlPKaLbMJ2s3luBnSHkjSKEn3imlpGZ26NKw1t6DY+udOfLuaA24NraayBIReZkKfaRcwjQT01YPwqcAsHMvOss0jWvD2CqhKzXWxCnxjhB2Z/N9wvqcVock8txzzsSpMEDguWJZrm497vs27iPIY56sVH2CKp8XM0UMOiKKMaVwgjmhZAcd0EuyHBPU4JPxq68sc3okEdpYJHNJGvfaaYQmRz35HVArSMC7HLEKN9iahtJBJt4OoUrnS8/30Z+usUZQe92E5Ljzwskahj6ahVw5c5htr2Ltbd9QBKspBVo2HVGU7qR/8ZFc4Wwn8ryXlCUfmRK0pSuhQUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoCA5540bSzkkTeZsRwL4tK/cjA89zn4KageD2C28EUC7iNFXPmQN2+ZyfnUfxG++ncVYA5t+H90eT3LDDHrg9muV8wxPnU5We2WXg9DSQwnIUpSuRsKvxS17G51D3LjJx5SqO9/TQZ+MTH7Va99bs4BRtEiMHikG5Rx7rY8R1BHiCR41N8zJ9SGHVJYWHpl1jb+47/AI1G1speYnkaqHTZsQsSIqteXTs86qe0lmOsxkZyqAABVye6FA1AjzFc0v8AmO+uJj2EtxjPdRCQcfqxgD5b48z1rpfN9uXtXVVDMxRVB6amYIpPnp1aviAfCsvBOEQWcQRMA7a3PV26b/EnAX12q7RwK1y1xO7mDW1zbo0oGoG4UpqTIU7dmdRBI8utbMllLCxYWkcY/SWrSj+kqDJ/oMKthdN2OBoznO2jbvA53XbrmvElwdyiNIEQSOVKnQhzh9zls4YgDJIRsdACGStR8ReaWyjMiyq1wjN2bB2+qBkKthUzvpYjQp7vQmupsA3UZ+P/AL1zjmXl5piktuyw3CnImBZWxgjGU6/HfbI8ayezriPEUuJLK8JkATWjs2pgM4zk950PTP2TpG2a43Qb3NmltjF9L7S4ccs8qZVHeUd4AZ1L8B1I6jz6eWKk9+1hcJxGHJTurdIu4liO2vA6smcg+XjjOehZqmXVqqyTW5AKe8q+Bik1d3HkGEiAeSCvLvzTJXx7OfFG+cFNdD7ePM6/bzK6q6EMrAMpG4IIyCPQislUD2QcRb6PLYSNmSzfQpPVoW70LfhlceGkVf69eMlJZR47TTwxXiaVUUuzBVUElmIAAG5JJ2A9a1p+JRLKsJYGQqX0gjKoOrt91c4GfEn445zzLxv6e+F/+kQgoPC4YbiUjxjB9wfaPf8AuGuV98aYdci9VUrJdKJ+49ocOfqLeedP0i9mit+r2rqzD1xpPgTUtwDmq2umMalo5gNRhlAVwPvDBKuPDUpIHnXPq0uKQOVEkR0zxHtIXHVXHQfqt7rDxBNeVV7WcrMTSw/4N9mgShmL3O10qM5a4ut3awXSjAlRWx10kjvL8jkfKpOvbPMFKUoBSlKAUpSgFKUoBUJzpxwWVlPdHGY0OkHxc91B82IqbrlP/iGum+iW1uDjtpxn1Cg7fiyn5UB69n3DjDYRasmSUGaRj1ZpO9k53zp0j5VY6BAo0joNh8BtURxDmKKNiipLM494RICFPkXYqgP8XVn0rHvJnsJxriskvWOOdGLKrAshAYAglSRkA+Rxvj1HnVe4jzLm3l0LJDMV0xiVV99iEQhlLITqYHTnO3SsHKFzHDJPas2ltSSRajvIhjjRmBPvHtEct45bPjmrdDw2U9/FzUU+SZ5lbFu3q8K/jLGv/Wous/GeJQyuII3V2Rg8oU6tIAOhSRsGLYYDrhD6VgrRQsRMOrknZseXQHr5g/huKkOTrMTSyXLDKwsYoR/HA+tk+OT2YPUaZPvGtHNTXI8yRcNtnchdadoeu7SM0p9Tuxrhr7HGrC7TlVjOWfeb+HphLo7CJozPj7cIYEk/qHvfqCRftVuWXD1iaUjcSPqxgYUaVGkemrW388jpUkOymjK7Mjgq3qCMEEfA9KgeUp2ezgLnLqvZuT4tGTC5+bITXLQWuUHF9hNyXKK6baWJA2kCFJDB3idZwxiWQeY1BV33OonoBq0uI3RhaO8jwwhD9oBg6om09oB6jSHHqmPGrhzJAsscdu3SaeBceYVhO4+aQuPnWtzhZKJElx3ZsxSDHVtJZGPgO6roT4/VjwFap3RU1W+0rFPHUuwko3DAMpBUgEEdCDuD+FV7mRCLiFh0aOZW+IaJk/YZPxr77PZWbh8AY5KB4/lG7xj9iivXM7DtLdfH65vkAin9rrWDUr9OS8GexGWVF+RCPezWdwl7AqsdPYzK5YKUYgq50g40NuTg7E9AKnbjmXiUgIaWKIeUMZz6gtIxz8lU+tR7AEYO4PWtW9dgAqDLH3VyRnHizdVUbZI3JIHofMq1l3Qq4vGPsTPT19TnJZNe6+kLHJGO0kWY5mOqMPJg5UMWXU6AbadQyM5DamzgsZmkJCXI1D3kaNg6/FXYEfHGKzDh8nV7mXWemjQiL44CYIP84t0rJf8ADo5wNWVkT3ZE2ZDgHKnrjf3TsfGrS1PUkpyz44z/AA+zyx5ERpw/hWPDP9GSOO4U7yI6+RQofxViP7tba1F8IvpNTW8+O2QZDAYEqZwJAPDyYeB9Dtu8QuhFE8nXSpIA6k/ZUepOAPU1ksjJzUWlnw7TRGUenP3Lj7H/APy1FHurLchfh20n/c1dageRODGzsLe3b31TL7577EvJv495mqer65cHzzFKUqQKUpQClKUApSlAK5N/4ibR/oltcKM9jNv6ahsT6ZUD5ius1G8xcGivLaW1lHclUqTtlT1VhnxUgEeooCuW1wsiLIpyrqrqfMMAwP4Gq3zBbWUJULb/AFr5YC3Do2Ae87diNTDJ6YbUT0xqI0OW+L/uej8PvyVmtiFiwrMbiJiezaMKCX8Rt0AGcYON6TmO7fPY2ojB+3cvg/Hs4sk/AsvyrPGEk9j0Z3Vyhu/yafC71ZAy6yzpgOGRonGd11IwBGR44wcHFZb2xhmGmWNHA3AZQ2D5jPSsYsmeXt5pO0k0hO6ojQKCWA0jJbck95mx4YrdrWs43PMeM7GG1tUjGlFVR4BQAB6ADp/7nzrI+fDHzOP+leqVJBqteoCEkzGWOAW91j5Bvdyc7KSCfKo675hjteH2jShjohiiCL1LgHUN+mNO59BUxNErKVYBlIwQQCCPIg9a5h7RbJ4FhiU5t9UjR5zlCcF0z4jJ1DO+7DfFZtRQrUk+EyGupYOzchcSWZNaZ0SIHAPUYOkg+u+D8Kycon/dyfAz3hHwNzPiqx7J5hb8O+kSbLFDNIf1dbP+0L+2rhy7ZtDawRP76xoH/Xxl/wC8WrJoq+mc8cZx9yY7QS8WeOKTKs9szdEM0nzEbRj/AJpHzrW5j4gs1mzAaSk1qSDvt28QPh4qWH41X/a9xGS2t4Z4/e1tGD93WhOd+vuGtHhV+9xwoM28kxgX9Z43eQ/iIGPzq2orl7+E1xlL8kqck0uw2eReNxRWEIcS6m7V8LFI+dUjuN1BUbEdSKzSTvNKZ3XR3QkaHBKLnJLFcjUxxkAkAIoycEnR5cA+iW+OnZRf8Iz+2pKvH1WslPqhjG/5PfpqSjFt9grwcDLHbbcnwAyf+9a9xxKFCVLjUPsqC7eQ7qgtufSvdrfDtAzx6Yo/rXaZ1iTSvQH3nGXKDGjfOMb1wp087JKOMZ9fUvZdGMW+43b/AILeJbG9ZUWOMFzG2oSaMbyHbClVLNowSR1KnujWhj0jGc9ST5knJP4np4VceYbq6l4bPKGtgj28hGntJxIrIdIVvq/eyMHSevSqSIJPGU/zVQf8Qat/tDT11Rio7fv67WZNJdObk5bmlzBEdKzIpaWFtahRksvSRPgy5+YWrXyfwP6VIly4/wB2jIeIH9/ce7Jj9GnUfebBGygtX5YnAbEkpIAJwqHSCdIZtMewyevoauPsvilaxUmVwiyXCRgafdWaUDOpMjbC48NPrgdfZ1KliUt8cevt9TnrLGspdvJeKVjjjI6sW+On/oBWSvZPOFKUoBSlKAUpSgFKUoBQ0rlfPvMst3O/DbVykUe15Mp3P8nQ+BP2j8R4EECC40jy3MjQ3hll1YmuUgXRGMk9hGWL69IwNK4UdWJbY70JZQAFkf8AjMU39TuMfJR8Ky2tskaLGihVUYAHQCs1XSKtmo8lx9mOP5ysP2CI/wCNec3X3Yf6T/5K3axTQK+zDI8jnB+I6H51JBpvJdjokB+Msi/+ka9i5uAMtb5//HKrf8wJWvd8IsERne2gCqpZj2UewAyT08hVz4L7NOH9ghltgszAM/ZvJFpJHuAxsuQvu+uM9TUN4J5Kst+NtUcqE+BQtj4mPUo+Oajzw+Did/bWX5yJO0luNDY0KFKqpK9CXIGOo2qO9tHL0vD2hltp7hbeUMjKZpW0uN+rNnDKdh/EPnVv9i3FeGS2RTsoYp42Ha6sZkO+mXU5LHO/jsQcYBFQ2TgnzyCYUCWtzIIwYz2E2mSNhGQypqAEqDYfaI81YZBjeUeYm4mJGtmt0VG06ZGZ5W2HfKLp0KdwDk5wenSr/bPH9mQN6a9X7SSf21Q+evZLZ3gea3At7onUHXIR2699R0yftDfJzv0qiSXBJo+0rhk0lp9FmRO0mdVtmjcEPMMsqMJNPZ6gHUHLDfcg4B0+H8qcTt7WCNbZCIUYsGuEQl2wSfdZdu/jvD841THInsqjs5Vurmdrm4T3M5CR7YyASSx64JwPTO9dAuQeoVTjfvMQB6+6fxo4ptN9hGDhVs02qT6PGUZXImtpsLpY97KEE6dWQ33GByCpzW1bTRS5DudQ2eJyIyhPgUB7wPhkuD4E1sm6e5u7u8j0BJWjSM7sHWJSnaA7ZDMWwdtgPjUfxwSK0bmWBJO8sZMbqH2yYWbtMaW9R1GRuBWXU6KNico7S7zTTqXB9Mt0TCQIF0BVC4xpAAGPLHTFUTnTt3iaFNZWOYRs52UqyxyIHc90aSQMk/ZBJ8as0nDOLrB9JW3tjH2fbaopHUFdOvVp6scb4KVcOVOHX1rbkx/Rrvtm7YyCSSHtA4XBH1bqQFCgDujAFYdLpZVT6pvP9/6NN98bI9MfSM3Eytvw+0sFdXIjh1spyCqAEEejOox5qH8qgSQNycDxJ8PWtrj3CmiH0iK0MeplEqQvGY21EL2mH7Ps2BIJfABXOroGWC5rt7nsZLdbeYTSRtpBTu6cqrnWD2fRse99oeYqmtptvuWF8O307y2mtrrre+5P2/HbX9xnuIMu0smggqQzuGH1QH6o0L5lgcZY1fOUuEm1s4Lc4LIg1keLnvSN83Zj865R7OVtY3t7a5kEYtVM2mQMoeZ3PeJI06UwuDnDMEI3Uiu3CvYhGMePI86Tb5FKUroVFKUoBSlKAUpSgFKUoCA554y9pZSyxjMpwkQ2/OOdKnfbC51H0U1xmKK5gtY/o692VsLK0ckst053lmSNRqKAb6269wAYOqu2cw8uxXjQCfvRROZDH4SNpKKG81Ad8r45AO2QZcIPIeXy8qA4rbQ8UCgpw26k23aV4YmProzgfDFfG4w0bBbu3ntSdg0yYjJ8hIO7+OK7bXPPbDxyRIUsIM9td6lYhdZjiGO0bHmchQdurHIxkTlkYKXxXm+0gfs9TSSfciXWQfLOwz6ZzUf+X9uG0yQ3EfidSDYeBI1ZArf4PwARIET6lMbhCO1k67vIOn6qYx4Nipm0s44wRGgUHc4HvHxJPVj6nJq25GxX5uMm5h7SIIsPaQhnkYOwHapkGND4j7JdSQfDINdZ4Vwye4hjluLuc9pGjGOErAikgEhTGBL44/OGuP8AMHBxbE3lsoGnBniGyyoCCWA6Ky41fLPnno/s34yXbsy2UeIPB1x2aEbehxKu3Xut5bVZKNb2r8Fjg4a9xAv11u0bpI5Mz+8I2y0pYsNLk756Z8K4lwHn6/t7yO7eV5igKlHY4aNiC6DwXOARgbFVODiv05zjw03NjcwAZaSGRV/W0nT/AHsVxzh1laSQqVgi0MqnGhfFQ3l13rlZZ0G3SaR6ltJ4wdY4Fz1w26iEsdzEu2WSR1R09GVjkeO/Q42JqB5l9rnDLdlijm7ZmZQzxDWkSk4LkjZyBvpGf+/Hr32fhnk7OXSMAorKWG+e6WznYjrg7EdaqnB+CTXF0lmgxK8nZ466SDhiceCgEn0Bq0ZxlwcrtNZT86P1MvtC4UQDHdLKxxhIleSQ+mhFLfsqs818Vu7sm3dHtbZlDOhIE06ksNL6TiFDpOVBLEbHSCQbrw2wteG2YjQaYoU3OMlj4tge8zHw8ScDwrmEnFbi6kneBA7gs80jHEFsAuyM4zrZUCgqnUgnbJq6ODN5EAAAAAAwANgANgAPCojmFI5EjJCuBNGuCAQCxMO4PiO0zjwIFa/DbOWaOOWeebU6q+hGMSpkZ0gJhjjONyelebzhkkZMkeqYtIjujMoJCdmVwQMFlMQAz11nJOAawT9o0ybrT33Rqjo7ViZ1LhVhaPBEUgiEbxoVAjUYVlBA6bbGuIcl88XXDVCXVu0luxJV8aXUnfusRhgeukn1BHj1LkTmSGSFow/5okgHZlQt3gwO6mMsRj7ujrVT5j4fHG0lpchVVmYxau6skerUmk53KjCkA5BXPQg1aE9t0dKqY2ScerDxt4v/ACbV37auHsNAt7gq/dfWIwAp2Y4DnVsTttnzqc5WuuAW8Yltp4owylVaWZwQNiUXt2yu4GQAM4Gc4Fcu5R9nv0y/dRq+hRN3pAff6HsUb7RzsSOgG+5Gep8ycx20KCygIAChSkQLEL07NFTOx6FsaQMjOSSs2uMI7ZOKjJywyI5o4lb3dxC0RYpEJdU2SquXCqI0b7Q21EjbuqNznE97Mo5nt5kE8qxQzvFD7rAIFQlQXU5CuzqDuAFx4VS5pbiQxh828LywxuQwM2mSRIyQRlIve65Y/A112z5ejt41jtGMCoMKm7xn9ZWPidyVKsx3LVTRuU27G/DCefTLahKCUF554NkWdwo7tyWP/wB2NG/5fZ16WS5X3kjceJRipPwVgR/frB+6rxbXMegfpUy8fxbbVFsMnUNI++alI3DAEEEEZBG4I8CK3GU10v06MGjPk4wPhq90n4E1tUIryiADAAA8hQHqlKUApSlAKUpQClKUBjn14wuAfM749ceNcl4nCG4neS5LGPsrdWY5JwizSHyGWlAwAANG3lXXq5PKwaWdgQdU8+49JHQfsUfhUohilKVcqfCKo3AeMycPuHiIzFazK0bA+4JNREb5PuujOoYnCuwJ2xi9VWr6NV4jGGAKXMEkRUjIYode/n3TioZKO3cO4pHNpKMGWRFljYfbQ43HwJGfLUvnXLeaOCyWFzJJgmylJdXAJFu5JLo+PdQkkh+g2BqFI4lYIosGEsMb9pHC/vQkkl1Q576OCwKE+OR3gGHS+VfaFY3ihHYW9xjD2850MD46dWNY+G+OoFc5w6lhnei+VM1OJz+e+hRO0aRAmM6sjHy8/gOtbfs/4KlmLrjt8vZBg5hRxhlRj7xHUM/dUDrufvCrrxNOAWTfSZUsonGWDBItZPXKhRqLfAZqrcR41JxB1leMx26HMETjvM36dx4HqFXwyT1IxSqrpNOt18tQkmsJGnzVf3PFQELSW1om6gd2W4bG0jD97QHcIdz1ONsYOJ80GLhd1w144o5REqwmJezjmjkkWJiFydLjWdQyc5z0qUqj+0cL2tj59qfwzFn/AKV1ksLJgW7LiqgAAdBsPltWrxS77KNnC6m2CL992IVF+bECts1E8QuUF1bdp+ah7a6kO5wIk7hwOvfYfgK+Q09fvLUn67T6G6fRW2ifteTYGhj+kIDcBTrmjZ0kLMCJO+pBYHUw0kaQpwBgVg/KGaPNurpdwr3TJNA76MbYZ1YLcEdO6udsE5zWtxbmGST6rDRgj8zGdUzgjo7A6YVO467/AHxuKx28yH6tQO6NLBPcTw0Z2G3TT19AK9OepnXvz9l6/YxKiM9uPXrxPl3d3c2oCTMJUAA5hVsZJCRx7pG22zMxPiOgGhcWEMUeqWdogPtRuYFB8SqIQCc74Oo7+NSN9clcImDI+QgOSBj3nOPsrnfzJAzlhS1sETfGpyMNI2CzfE+A/ijAHgBWSeqnL4pPC7EvX++40RoivhijSS3mmstEhIleM7kYIbqjEDodlJ8jmuw8r8VF1Z29z+ljRiPJiO8Pk2R8q5lHGq7KAB1wNqs/sfuc2k8XhBd3Ma/AsJR/zDW72Xb1SmlxnJl10MKL+heqjjwsIS0B7Ik5KgZjY9SSmQATknUukk4znGKkaV7B5xrQXJJ0uuhvLOQf1T4/gDt0FbNatzxCBCBJLGh8A7qp/aa2QaA+0pSgFKUoBSlKAUpWO4nREZ3YKigszMcBQBkkk9ABQEDz3x82dqzJgzyERQL5yNsp+C7sfRaoHDrURRrGCTpyMncncnJ8yevzrUbircSu2vjkW8WqOzUjGR0knIPQsRgegx4ZMhJIARnxOM+vgPn/AI4HjVkirMlKVjnnRFLOyqo6sxCgfM7VYgyVXuc0KxxXIODbyo5ONXcJ0OMZGdiCd+gPxqTh4zaucLcQsfISIT/jWW97JonEhXs2VgxJAGkjB3Ow28agG3e2bQyKpcyI6lkcgA90qGU6QBjDKV8feznGTF8Rs7W4zHLGshXI3B2OxKhx0OMEgHOCDTl1OI8QtreC3ARLcsjXsgykgUPEvZId5CVKsSdtS4qxweyOAqqzX19IV3AEoRQ2+WVQp0k6m8ftHzqMlsHOOH8uW0d/FGkY+phMrsSTrctoXOScYwWGMVdqyXPsuuLdzPZXbTNpCtHeHVrUHOBIoBQjfHdIyd61bO2v52eOG2CSx4EguJBGIyckbLqZwcHDgaT4E4IBNENGaq5xbhLXS8QnAyLGBNGR++a0uJCD6RxhT+uamrzg3HoBqa0t7hR1FvKwYDzxIBq+AGan/ZBLBNZXC/vj3FwbiJ9nQsxVUcHcfVqo8tiPA0bySkQQYHcdDvWpwiJZOKFHUMn0F8qwyG1TKrAg9QQP21sx2nY5g1auyJi1ZznQdIJ9SACfUmvnCl08Qif9JDNF/ODRygf0UkP8018rp4+7vlHzR7tr660/I1bfla8jiktkWNQxkxcCQgkMTpcjSW1qpAxnHdADAdNqx4LfhVi7K3iCgLqEjuoxtlUCKT8Cy/GrpStUumXKXOe3n9zik1wymXPALiBmkjH0nVjXuqSjHQKCdDIMkhcqRk+8STUd+UNqCVeTsnGxWYNEQeh98DO+22a6LVc5jsQD2uNSNgSKQCFOyrJv4HZT5d07d41zsrhPdrfw2LxlKOye3iVPiHNlqgAjcTysQEji75djsB3cgbkevkDXT/Zhy/LZ2WmcATzSPPMBuFd8d35KFB9c1RjYQ6WTsk0sMMAqgEeRwKnOVOdVtS1rfzAIql7eeQ7yIMBom8WkXIwdy4I8Qc6fZllOXGKafj2mfWwswpS4OlVSOMcyS3Mv0Sw3JzrmBwAAcNpPgoOxcbk91N8skFzBzPcXpWCJHSKQ6Uizoluj1w36GLG7Drp97A7rXrlXgC2kWnIaVsGRwMAkDAVR9lFGyr4Dc5JJPpqfvHiPHf8Ahfn++MTj0rL5MfA+Vbe3GpgJZepkcAnPiVHRP8T4ljvU9SldUktkUbyKUpUkClKUApSlAK41zzzK3FJ2sLZiLOJh9JmU/nmG/ZIfEZHXxxnoBqz8+c5y30j8N4c+Ixtc3I6AdDGhHXO4yOu4G2TWLhfDoreJYolwq/iT4sfMmpSIbNiGJUUKoAVQAAOgA2ArHfWwkjaMnGobEdVPVWHqrAMPUCs9KuVNDgl+ZogzACRSySKPsyKcMPgeo9GFZfZ5y/DxK4uby6USx28rQQQtugKgF5GU7MTqHXzPXAxDxuYb4nBEN1lQd8GaJV1Y8BlWA9WQjwqa9mnFlsuIXFhKdKXb9vbsdgXPvx58+gH6n8YVVlkdIuOVOHOMPZWzAdMwx7fDu7VHR+zngyvrFjDnyK5X+iTp/ZVppVSTyiAAAAADYAbADyr1Wvf3sUMbSyuqRoMszHAAqN4NxSe5xKsXZW59wyg9pKN+8EGOyU7EFiWIO6r4gTVa1xZqzLINpFyAw66TjUh81OBt5gHqAa2aUArnvtI4ZNbauLWJ7OdEKXGFDCSHoXK5AZ49mB8lwcgAV0KvLoCCCAQdiDuCPKgONcOVBEmhiykagxOS+rvFyfEsSWJ8ya9XbxhcuwUZGG1aCG+zhgQQc9MHNfOL8uycNkc9nJJaAMYGjV5WQMQzQuASVxpARsBcE6jmtHjNpAbeK5VxPeJKjNDGrygQtmN4FAGNQD6ix6lT4BQPB/66x3N5eOc97PV/5kPdrb6EjZcZl+kwxRzmbW2JIiUfTHgky5A1LpIXcnBzjGSMXWqzwPinZQhDaXnc7uUsrjDgbK/5sZOMZ9Q3hipPhvH7ad2jRyJV3aJ1eORRtvokAbG43AxvXSVU4rdPzKxnFvleRKV4miV1KMAysCrA9CCMEH4javVGONzsPM+HrXM6lKgBGUYklGdCT1bSxUMfVgA386orm2I/RzKu0kBEyHyKbn5FdQqStJu0DS+ErySL1HdZiUyDuDo0kjzJrU5nkC2lwT+ikH4qVH7SKxR+HU/D/wCvydnvTv3F/wDZzwBUhS9kZZbi4jRtYHdjjYB1ijB6LuCT1YjJ6DFyqG5Ltmi4fZxuMMlvArDyIRcj8ama+qjFRWFweE228sUpSpIFKUoBSlaPGuMW9pC09xIsca9WP+AA3YnwA3NAbkkiqCzEAAEkk4AA6knwFcd5t5xn4m7WlgxjtBlZ7oAgy+ccfp5nx9B7+DjvFbvi5AcPbWAIIhzpkuPIyY91PEL899mG/bwIihEUKqjAUDAAqyRDZg4Xw6K3jEUS6VH4k+LE+JPnW3SlWKitednZkhix2smdORkIB70rfxVz0+0Sq/ar7czkaVRS8jnCIOrHx/VUdSx2A+QNj5f4N2ClnYPPJgyONht0jQH3UXJwOpySdyahsEHz3wQLw3EI71ponjLEkkx5Z2Y/aJUux82NRF7YwX0CFs4YLJGynDISAQQfA+Y9K6QyAggjIIII8wdiK5hymhiE9mxOq1meMZ6lCS0bfME/IVCJJKw544tw+Mi6jS9gQfng4ilVR98NkOenr5kk1Lf7VZ5EBt+FzsWAIMrpEuDuDk5zVd5ite27CE+48ymQeBVFeTSfQlFFTFMDJH38d1fNr4g6sozot489jHnbUc7yuB4nYZOOtdC9nXFe3sYgx+thHYTDxEkfdJP6wAcejCqbWhFxKbh9wb2JTJC4UXUK9WVfdmT+Oo2I6EeXUGgmdnpWlwbi0F1Cs9vIskbjIZf8COoI8QdxW7VSxhuLlU65/mqzH8FBNVHjHG0Q/wDmbW4J/f7YBQfLLIn+NXSvhGdjQFLs7K/uF1wcbR0+9DbWzD4ZJYVnPL/FxuvGCfSSztyP7mk/tqN565Vjgil4lYYtrqBWlJjGlJlXLukiDutkAnOM5xvVt5a4sLu1guQNPaxq+Oukkbr64OR8qAqt/wAx8U4d9ZfwxXFrkBri1DK8QOBqeJicjPip2+OAcvtIsop7D90IWXtrZBc28y75UDWVyPeR0yMdDkVZOaHiWzuTNjshDLrz006TkevwrjvL3E55+D21gVZYyG7aRti8faOyQoOuCunLHAC7DOTjnbZCuPVN7F4QlOWIlph5pRgMQyEkA4Bh2zjrmQHx8q0eKXctwCjAJCfeQEs0o+6xwAq+aAHPQtglTHWUnaO8g90fVp66T32HoW7v/wCrPjW9XzVuolF4Wx7UKlJZYrR/c4313DYgZjys1z5CJDlUPq7ADHpmsl/dlAqohklkOiKJesj+XoB1LdAATXQuROV/oULGQh7mYh7iQdGbwRc76EBwo+J2zWn2ZpXKXvZcLjz/AMHDW39Mehcss1KUr6A8kUpSgFKUoCBk5UgYljLeZJJ2vbwD5AS4A9K0b/2d8PnKmYXEpQ5QyXd05Q7brqkOk7Dp5VbKUBVf9n1h/Kf7Xd/6tP8AZ9Yfyn+13X+rVqpQFV/2fWH8p/td1/q0/wBn1h/Kf7Xdf6tWqlAVWL2f2CsXX6SrEaSwu7sEjOcZEucZ3xWf8i7X9Jef228/1asdKArn5F2v6S8/tt5/q1z3mngyWHFImQuYryIoTJJJKe1j3BLyMW3QhQM+ddlqo+1Hl97uxbsh9fAyzw4660ydI88rqAHmR5UBU2UHB8jkfgR/gTXqtDgfFEuYEmTow3H3W+0vyP7MHxrfroUFKVG8b4uluoyC8jnTFEu7SudgoA36kb+vmQCB84Pwa6F637lzC3k7JpZlbJgkOpVjV0+yX+s7wGQEPnmrWntCmte7xWxltsbdvEDNAfXK5KZ8F3PnUx7P+XXtIC05BuZ27ScjoDjCxj+Ki90fM+NWciuZchuFc3cOucdjdwuTvpEihvmpww/CpSS6jUZLqB5lgBULxHkjhc5JlsoCT1YRqrH4lcE1R+b/AGWWcZins7IOqFxNEHYlgQul17R8EoVPdyMhz1wKiTwskpZZm9pPPkMsEvD7BhczzKUdo+9HEh2csw2JIyABnr8AdnhXOMVnaw2tvaXU3ZRqgYiOJWIG5Jd8jJyeh61UOV1RrdJVCgP3tCAKib+4AuASOhY5Oc9BgCarxr/asoTcYxW3eejVoVKKbZH8w3PEOJkJdskFqCG+jQsWL43AkfbODvtt6AgGsXE5yNFrD3XcYGB+ajXAZ/TAwq/xiPI1INN3xEitJK3uxIMu3rjoo82JCjxNaEnDJ7biDi50h5oY2i05K4XPaRhj7xViCemc5wBWdyvvTusW0Vt3Z9bnZKqpquL3fJIQQqiqijCqAqjyAGAKyIjswSNC8je6i+PmSeiqMjLHYZHiQD8r4hZCWSSVCcZKSSLnGcZCkA4yeo8TWGroc82Zx4GqzqUcQLXwXkIRt28txL9JKlS0LBFRSQezQFScbDLHdjucbATP5On+F3f9aP8ALVJtub763HaF/pcI7zKwQSaepMbxgK2BkhWB1feFdLsLxJokmjOpJFV1PmrAMD+Br6nT212Q/T4X8HhWwnGXxkV+Tp/hd3/Wj/LT8nT/AAu7/rR/lqcpXc5EH+Tp/hd3/Wj/AC0/J0/wu7/rR/lqcpQEH+Tp/hd3/Wj/AC1mh4JpGPpNyf1pAf8A+alqUApSlAKUpQClKUApSlAKUpQHJeceR722uJL3hiiSOU6p7U7d7xeP47nHUHpqBwK0nNzDaWwvEcdVEROD89J/ZSlTkjB7g4pxO7bs7Lh0oJ/fZ1KIvnnOF/vE+hroHIvs8W1f6XdyfSb0jGs+5EPFYxgY6kasDboBk5UpkkvlKUqAKUpQFE4n7MLZpXmtp5rRnJZ1iKmNmPVtDggH4YHpXy29mi7dtfXUg8VUxwg+hMaB/wAGFfKVR1wby0s+RZTklhMtnBuB2tqmi3iWMH3iN2c+bMcs59SSa88wcCgvIuymBwCGRlOl42HR0b7LD9u4OQSK+Uq5UoF/y5xC32Mf0qMdJIdIfHm8bEb+qE5+6OlRLXuDgw3Or7v0W6z8PzdKV58/ZlE3ndeRrjrbYrHJvcC5K4jMkmvRaxzO7gMS80atgEaANCsxDPnWcF9xkV1LhtikEMcEYwkSKignOFUBRv47DrSlbK6oV/KjPOcp8mzSlK6FBSlKAUpSgP/Z";
    this.fname = "";
    this.flag = true;
    this.vehicles = ["Two wheeler", "three wheeler", "four wheeler"];
    this.selectedVehicle = " ";
    this.myStyle = {'width':'50%','height':'50%','border':'2px solid green','border-radius':'10px'};
    this.myClass="MyClass1";
    
  }
  changeName(){
    this.name ="Yuvan";
  }
  changeAge(){
    this.age=20;
  }
  changeemail(){
    this.email="hello@gmail.com";
  }
  changeImage(){
  this.imagePath="https://images.news18.com/ibnlive/uploads/2024/04/ms-dhoni-for-t20-world-cup-2024-2024-04-528915dd77ca630b1283779939207eec.jpg?impolicy=website&width=640&height=480";
}
changeFlag(){
  this.flag = ! this.flag;
}
setSelectedItem(vec : string){
  this.selectedVehicle = vec;
}
changeStyle(){
  this.myStyle = {'width':'50%','height':'50%','border':'2px solid red','border-radius':'10px'};
}
}
