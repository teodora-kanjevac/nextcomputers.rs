import Handlebars from 'handlebars'

const template = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t278,.t282{vertical-align:top!important}.t270{padding-left:30px!important;padding-right:30px!important}.t8{padding-bottom:20px!important}.t6{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t315{padding:40px 30px!important}.t287{padding-bottom:36px!important}.t254,.t283,.t300{text-align:center!important}.t164,.t186,.t203,.t220,.t236,.t86{text-align:left!important}.t282{width:16px!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t276,.t53{display:revert!important}.t143,.t162,.t164,.t165{display:block!important}.t278{width:36px!important}.t295,.t299{vertical-align:middle!important}.t299{width:257px!important}.t295{width:14px!important}.t245{padding:30px!important}.t141,.t160{padding-right:0!important}.t180,.t185,.t197,.t202,.t214,.t219,.t231{vertical-align:top!important;width:600px!important}.t235{vertical-align:top!important;width:681px!important}.t55,.t85{vertical-align:middle!important}.t55{width:210px!important}.t85{width:800px!important}.t83{padding-left:3px!important}.t58,.t64,.t73,.t79{padding-left:0!important}.t143,.t162{mso-line-height-alt:15px!important;line-height:15px!important}.t144,.t163{vertical-align:top!important;display:inline-block!important;width:100%!important}.t144{max-width:900px!important}.t141{padding-bottom:15px!important}.t163{max-width:800px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&amp;family=Inter+Tight:wght@500;600;700&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t321" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t320" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t319" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t273" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="700" class="t272" style="width:700px;">
<table class="t271" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t270" style="background-color:#F8F8F8;padding:0 50px 40px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="130" class="t3" style="width:130px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1" style="padding:0 0 60px 0;"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="130" height="130" alt="" src="https://nextcomputers.rs/assets/images/logo.webp"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t7" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t11" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t10" style="width:600px;">
<table class="t9" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t8" style="padding:0 0 15px 0;"><h1 class="t6" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1.56px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"><span class="t5" style="margin:0;Margin:0;mso-line-height-rule:exactly;">Pozdrav </span>{{customerFullname}},</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t13" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t16" style="width:600px;">
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14" style="padding:0 0 22px 0;"><p class="t12" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam na kupovini! Sa zadovoljstvom Vas obaveštavamo da smo primili Vašu porudžbinu i da je trenutno u obradi. U nastavku su detalji o Vašoj kupovini:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t20" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t23" style="width:600px;">
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21"><p class="t19" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t18" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Broj narudžbine:</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t26" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27" style="padding:0 0 10px 0;"><p class="t25" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderId}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t33" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t37" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t36" style="width:600px;">
<table class="t35" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t34"><p class="t32" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t31" style="margin:0;Margin:0;font-weight:bold;mso-line-height-rule:exactly;">Datum narudžbine:</span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t39" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t42" style="width:600px;">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t40" style="border-bottom:1px solid #CCCCCC;padding:0 0 15px 0;"><p class="t38" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderDate}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t45" style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t49" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t48" style="width:600px;">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46"><p class="t44" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:bold;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Informacije o kupovini</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t50" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t172" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t176" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t175" style="width:620px;">
<table class="t174" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t173" style="background-color:#FFFFFF;padding:25px 25px 20px 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">{{#each products}}<tr><td align="center">
<table class="t93" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t92" style="width:600px;">
<table class="t91" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t90" style="background-color:#F0F0F0;padding:15px 10px 15px 10px;"><div class="t89" style="width:100%;text-align:left;"><div class="t88" style="display:inline-block;"><table class="t87" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t86"><td></td><td class="t55" width="114" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t52"><div style="font-size:0px;"><img class="t51" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="104" alt="" src="{{this.imageUrl}}"/></div></td><td class="t53" style="width:10px;" width="10"></td></tr></table>
</td><td class="t85" width="416" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t84" style="width:100%;"><tr><td class="t83"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t60" style="width:600px;">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t58" style="padding:5px 0 0 5px;"><p class="t57" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"><a class="t56" href="https://nextcomputers.rs/proizvod/{{this.id}}" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#777777;mso-line-height-rule:exactly;" target="_blank">{{this.name}}</a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t63" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t66" style="width:600px;">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t64" style="padding:0 0 0 5px;"><p class="t62" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{this.ean}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t72" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t76" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t75" style="width:600px;">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t73" style="border-top:1px solid #CCCCCC;padding:10px 0 5px 5px;"><h1 class="t71" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">CENA PROIZVODA: <span class="t69" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t68" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">{{this.price}}</span></span> <span class="t70" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">RSD</span></h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t82" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t81" style="width:600px;">
<table class="t80" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t79" style="padding:5px 0 5px 5px;"><h1 class="t78" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Količina: <span class="t77" style="margin:0;Margin:0;mso-line-height-rule:exactly;">{{this.quantity}}</span></h1></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t94" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>{{/each}}<tr><td align="center">
<table class="t171" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t170" style="width:600px;">
<table class="t169" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t168" style="background-color:#F0F0F0;padding:30px 35px 30px 35px;"><div class="t167" style="width:100%;text-align:left;"><div class="t166" style="display:inline-block;"><table class="t165" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t164"><td></td><td class="t144" width="254.11765" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t142" style="width:100%;"><tr><td class="t141" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t140" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="249.11764705882362" class="t139" style="width:798px;">
<table class="t138" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t137" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t99" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t98" style="width:600px;">
<table class="t97" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t96"><h1 class="t95" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Podaci o dostavi</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t100" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t102" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t106" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t105" style="width:600px;">
<table class="t104" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t103"><p class="t101" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerFullname}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t108" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t111" style="width:600px;">
<table class="t110" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t109"><p class="t107" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerPhoneNumber}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t114" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t118" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t117" style="width:600px;">
<table class="t116" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t115"><p class="t113" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerEmail}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t120" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t124" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t123" style="width:600px;">
<table class="t122" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t121"><p class="t119" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerAddress}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t126" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t130" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t129" style="width:600px;">
<table class="t128" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t127"><p class="t125" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerCity}}, {{customerZipcode}}</p></td></tr></table>
</td></tr></table>
</td></tr>{{#if customerPIB}}<tr><td><div class="t132" style="mso-line-height-rule:exactly;mso-line-height-alt:3px;line-height:3px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t136" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t135" style="width:600px;">
<table class="t134" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t133"><p class="t131" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">PIB firme: {{customerPIB}}</p></td></tr></table>
</td></tr></table>
</td></tr>{{/if}}</table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t143" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t163" width="225.88235" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t161" style="width:100%;"><tr><td class="t160" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t159" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="220.88235294117655" class="t158" style="width:670px;">
<table class="t157" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t156" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t149" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="215.88235294117655" class="t148" style="width:600px;">
<table class="t147" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t146"><h1 class="t145" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Način plaćanja</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t150" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t155" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="215.88235294117655" class="t154" style="width:600px;">
<table class="t153" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t152"><p class="t151" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{paymentMethod}}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t162" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t244" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t248" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t247" style="width:620px;">
<table class="t246" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t245" style="background-color:#FFFFFF;padding:0 25px 0 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t193" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t192" style="width:800px;">
<table class="t191" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t190" style="border-top:1px solid #CCCCCC;padding:20px 0 10px 0;"><div class="t189" style="width:100%;text-align:left;"><div class="t188" style="display:inline-block;"><table class="t187" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t186"><td></td><td class="t180" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t179" style="width:100%;"><tr><td class="t178"><p class="t177" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena proizvoda</p></td></tr></table>
</td><td class="t185" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t184" style="width:100%;"><tr><td class="t183"><p class="t182" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{productsPrice}} <span class="t181" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t210" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t209" style="width:800px;">
<table class="t208" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t207" style="padding:0 0 10px 0;"><div class="t206" style="width:100%;text-align:left;"><div class="t205" style="display:inline-block;"><table class="t204" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t203"><td></td><td class="t197" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t196" style="width:100%;"><tr><td class="t195"><p class="t194" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Popust</p></td></tr></table>
</td><td class="t202" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t201" style="width:100%;"><tr><td class="t200"><p class="t199" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#18B53A;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">-{{discount}} <span class="t198" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t227" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t226" style="width:800px;">
<table class="t225" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t224" style="padding:0 0 15px 0;"><div class="t223" style="width:100%;text-align:left;"><div class="t222" style="display:inline-block;"><table class="t221" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t220"><td></td><td class="t214" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t213" style="width:100%;"><tr><td class="t212"><p class="t211" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena poštarine</p></td></tr></table>
</td><td class="t219" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t218" style="width:100%;"><tr><td class="t217"><p class="t216" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{shippingPrice}} <span class="t215" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t243" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t242" style="width:800px;">
<table class="t241" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t240" style="border-top:1px solid #CCCCCC;padding:15px 0 15px 0;"><div class="t239" style="width:100%;text-align:left;"><div class="t238" style="display:inline-block;"><table class="t237" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t236"><td></td><td class="t231" width="257.61124" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t230" style="width:100%;"><tr><td class="t229"><p class="t228" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:6px;">Ukupna cena</p></td></tr></table>
</td><td class="t235" width="292.38876" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t234" style="width:100%;"><tr><td class="t233"><p class="t232" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:6px;">{{totalPrice}} RSD</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t249" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t255" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t259" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t258" style="width:600px;">
<table class="t257" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t256"><p class="t254" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t250" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">Ako imate bilo kakvih pitanja ili Vam je potrebna dodatna pomoć, kontaktirate nas na adresi </span><a class="t253" href="mailto:prodaja.nextcomputers@gmail.com" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank"><span class="t251" style="margin:0;Margin:0;color:#BA4A66;mso-line-height-rule:exactly;">prodaja.nextcomputers@gmail.com</span><span class="t252" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">.</span></a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t265" style="mso-line-height-rule:exactly;mso-line-height-alt:31px;line-height:31px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t269" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t268" style="width:600px;">
<table class="t267" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t266"><p class="t264" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam što ste izabrali<span class="t261" style="margin:0;Margin:0;mso-line-height-rule:exactly;"> <span class="t260" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">nextcomputers.rs</span></span><span class="t263" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t262" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">!</span></span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t318" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="700" class="t317" style="width:700px;">
<table class="t316" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t315" style="background-color:#242424;padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t290" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="100" class="t289" style="width:100px;">
<table class="t288" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t287" style="padding:10px 0 10px 0;"><div class="t286" style="width:100%;text-align:center;"><div class="t285" style="display:inline-block;"><table class="t284" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t283"><td></td><td class="t278" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t277" style="width:100%;"><tr><td class="t275"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t274" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/c41bd334-9038-40ed-862c-9064cc755f74.png"/></a></td><td class="t276" style="width:20px;" width="20"></td></tr></table>
</td><td class="t282" width="16" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t281" style="width:100%;"><tr><td class="t280"><a href="https://www.linkedin.com/company/nextcomputers" style="font-size:0px;" target="_blank"><img class="t279" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/3bca1b8f-cbe8-4c83-baf7-ca78ecb0e28b.png"/></a></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t291" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t307" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t306" style="width:600px;">
<table class="t305" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t304" style="padding:0 15px 0 15px;"><div class="t303" style="width:100%;text-align:center;"><div class="t302" style="display:inline-block;"><table class="t301" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t300"><td></td><td class="t295" width="14" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t294" style="width:100%;"><tr><td class="t293"><div style="font-size:0px;"><img class="t292" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/a11bf24a-884f-4dd8-a9b5-ddd2b01e5d9e.png"/></div></td></tr></table>
</td><td class="t299" width="257" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t298" style="width:100%;"><tr><td class="t297"><p class="t296" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2025 nextcomputers.rs. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t310" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t314" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t313" style="width:600px;">
<table class="t312" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t311"><p class="t309" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t308" href="https://nextcomputers.rs" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export const orderConfirmationTemplate = Handlebars.compile(template)
