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
.t256{padding-left:30px!important;padding-right:30px!important}.t8{padding-bottom:20px!important}.t6{line-height:28px!important;font-size:26px!important;letter-spacing:-1.04px!important}.t304{padding:40px 30px!important}.t276{padding-bottom:36px!important}.t242,.t272,.t289{text-align:center!important}.t152,.t174,.t191,.t208,.t224,.t85{text-align:left!important}.t261,.t263,.t267,.t269,.t53{display:revert!important}.t131,.t150,.t152,.t153{display:block!important}.t265,.t271{vertical-align:top!important;width:36px!important}.t284,.t288{vertical-align:middle!important}.t1{padding-bottom:50px!important}.t3{width:80px!important}.t288{width:257px!important}.t284{width:14px!important}.t233{padding:30px!important}.t129,.t148{padding-right:0!important}.t168,.t173,.t185,.t190,.t202,.t207,.t219{vertical-align:top!important;width:600px!important}.t223{vertical-align:top!important;width:681px!important}.t55,.t84{vertical-align:middle!important}.t55{width:210px!important}.t84{width:800px!important}.t82{padding-left:3px!important}.t58,.t64,.t73,.t78{padding-left:0!important}.t131,.t150{mso-line-height-alt:15px!important;line-height:15px!important}.t132,.t151{vertical-align:top!important;display:inline-block!important;width:100%!important}.t132{max-width:900px!important}.t129{padding-bottom:15px!important}.t151{max-width:800px!important}
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
<body id="body" class="t310" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t309" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t308" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t259" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="700" class="t258" style="background-color:#F8F8F8;width:700px;">
<table class="t257" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t256" style="padding:0 50px 40px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
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
<table class="t43" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t42" style="border-bottom:1px solid #CCCCCC;width:600px;">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t40" style="padding:0 0 15px 0;"><p class="t38" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{orderDate}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t45" style="mso-line-height-rule:exactly;mso-line-height-alt:26px;line-height:26px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t49" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t48" style="width:600px;">
<table class="t47" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t46"><p class="t44" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:bold;font-style:normal;font-size:18px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Informacije o kupovini</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t50" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t160" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t164" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t163" style="background-color:#FFFFFF;width:620px;">
<table class="t162" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t161" style="padding:25px 25px 20px 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;">{{#each products}}<tr><td align="center">
<table class="t92" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t91" style="background-color:#F0F0F0;width:600px;">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t89" style="padding:15px 10px 15px 10px;"><div class="t88" style="width:100%;text-align:left;"><div class="t87" style="display:inline-block;"><table class="t86" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="middle">
<tr class="t85"><td></td><td class="t55" width="114" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t54" style="width:100%;"><tr><td class="t52"><div style="font-size:0px;"><img class="t51" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="104" alt="" src="{{this.imageUrl}}"/></div></td><td class="t53" style="width:10px;" width="10"></td></tr></table>
</td><td class="t84" width="416" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t83" style="width:100%;"><tr><td class="t82"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t60" style="width:600px;">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t58" style="padding:5px 0 0 5px;"><p class="t57" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;"><a class="t56" href="https://nextcomputers.rs/proizvod/{{this.id}}" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#777777;mso-line-height-rule:exactly;" target="_blank">{{this.name}}</a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t63" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t66" style="width:600px;">
<table class="t65" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t64" style="padding:0 0 0 5px;"><p class="t62" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">{{this.ean}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t72" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t76" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t75" style="border-top:1px solid #CCCCCC;width:600px;">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t73" style="padding:10px 0 5px 5px;"><h1 class="t71" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">CENA PROIZVODA: <span class="t69" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t68" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">{{this.price}}</span></span> <span class="t70" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">RSD</span></h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t81" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="416" class="t80" style="width:600px;">
<table class="t79" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t78" style="padding:5px 0 5px 5px;"><h1 class="t77" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Količina: {{this.quantity}}</h1></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t93" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr>{{/each}}<tr><td align="center">
<table class="t159" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t158" style="background-color:#F0F0F0;width:600px;">
<table class="t157" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t156" style="padding:30px 35px 30px 35px;"><div class="t155" style="width:100%;text-align:left;"><div class="t154" style="display:inline-block;"><table class="t153" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t152"><td></td><td class="t132" width="254.11765" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t130" style="width:100%;"><tr><td class="t129" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t128" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="249.11764705882362" class="t127" style="width:798px;">
<table class="t126" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t125" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t98" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t97" style="width:600px;">
<table class="t96" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t95"><h1 class="t94" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Podaci o dostavi</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t99" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t104" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t103" style="width:600px;">
<table class="t102" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t101"><p class="t100" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerFullname}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t109" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t108" style="width:600px;">
<table class="t107" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t106"><p class="t105" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerPhoneNumber}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t114" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t113" style="width:600px;">
<table class="t112" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t111"><p class="t110" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerEmail}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t119" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t118" style="width:600px;">
<table class="t117" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t116"><p class="t115" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerAddress}}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t124" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="244.11764705882362" class="t123" style="width:600px;">
<table class="t122" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t121"><p class="t120" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{customerCity}}, {{customerZipcode}}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t131" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td><td class="t151" width="225.88235" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t149" style="width:100%;"><tr><td class="t148" style="padding:0 5px 0 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t147" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="220.88235294117655" class="t146" style="width:670px;">
<table class="t145" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t144" style="padding:0 0 0 5px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t137" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="215.88235294117655" class="t136" style="width:600px;">
<table class="t135" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t134"><h1 class="t133" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">Način plaćanja</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t138" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t143" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="215.88235294117655" class="t142" style="width:600px;">
<table class="t141" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t140"><p class="t139" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#242424;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">{{paymentMethod}}</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
<!--[if !mso]>-->
<div class="t150" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div>
<!--<![endif]-->
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t232" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t236" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t235" style="background-color:#FFFFFF;width:620px;">
<table class="t234" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t233" style="padding:0 25px 0 25px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t181" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t180" style="border-top:1px solid #CCCCCC;width:800px;">
<table class="t179" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t178" style="padding:20px 0 10px 0;"><div class="t177" style="width:100%;text-align:left;"><div class="t176" style="display:inline-block;"><table class="t175" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t174"><td></td><td class="t168" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t167" style="width:100%;"><tr><td class="t166"><p class="t165" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena proizvoda</p></td></tr></table>
</td><td class="t173" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t172" style="width:100%;"><tr><td class="t171"><p class="t170" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:600;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{productsPrice}} <span class="t169" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t198" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t197" style="width:800px;">
<table class="t196" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t195" style="padding:0 0 10px 0;"><div class="t194" style="width:100%;text-align:left;"><div class="t193" style="display:inline-block;"><table class="t192" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t191"><td></td><td class="t185" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t184" style="width:100%;"><tr><td class="t183"><p class="t182" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Popust</p></td></tr></table>
</td><td class="t190" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t189" style="width:100%;"><tr><td class="t188"><p class="t187" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#18B53A;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">-{{discount}} <span class="t186" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t215" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t214" style="width:800px;">
<table class="t213" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t212" style="padding:0 0 15px 0;"><div class="t211" style="width:100%;text-align:left;"><div class="t210" style="display:inline-block;"><table class="t209" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t208"><td></td><td class="t202" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t201" style="width:100%;"><tr><td class="t200"><p class="t199" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:500;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Cena poštarine</p></td></tr></table>
</td><td class="t207" width="275" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t206" style="width:100%;"><tr><td class="t205"><p class="t204" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:24px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#777777;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">{{shippingPrice}} <span class="t203" style="margin:0;Margin:0;font-size:14px;mso-line-height-rule:exactly;">RSD</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t231" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="550" class="t230" style="border-top:1px solid #CCCCCC;width:800px;">
<table class="t229" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t228" style="padding:15px 0 15px 0;"><div class="t227" style="width:100%;text-align:left;"><div class="t226" style="display:inline-block;"><table class="t225" role="presentation" cellpadding="0" cellspacing="0" align="left" valign="top">
<tr class="t224"><td></td><td class="t219" width="257.61124" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t218" style="width:100%;"><tr><td class="t217"><p class="t216" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:left;mso-line-height-rule:exactly;mso-text-raise:6px;">Ukupna cena</p></td></tr></table>
</td><td class="t223" width="292.38876" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t222" style="width:100%;"><tr><td class="t221"><p class="t220" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:44px;font-weight:600;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;direction:ltr;color:#222222;text-align:right;mso-line-height-rule:exactly;mso-text-raise:6px;">{{totalPrice}} RSD</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t237" style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td><div class="t243" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t247" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t246" style="width:600px;">
<table class="t245" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t244"><p class="t242" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#F8F8F8;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t238" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">Ako imate bilo kakvih pitanja ili Vam je potrebna dodatna pomoć, kontaktirate nas na adresi </span><a class="t241" href="mailto:prodaja.nextcomputers@gmail.com" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank"><span class="t239" style="margin:0;Margin:0;color:#BA4A66;mso-line-height-rule:exactly;">prodaja.nextcomputers@gmail.com</span><span class="t240" style="margin:0;Margin:0;color:#333333;mso-line-height-rule:exactly;">.</span></a></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t251" style="mso-line-height-rule:exactly;mso-line-height-alt:31px;line-height:31px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t255" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t254" style="width:600px;">
<table class="t253" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t252"><p class="t250" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Hvala Vam što ste izabrali <span class="t249" style="margin:0;Margin:0;mso-line-height-rule:exactly;"><span class="t248" style="margin:0;Margin:0;font-weight:700;mso-line-height-rule:exactly;">nextcomputers.rs!</span></span></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t307" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="700" class="t306" style="background-color:#242424;width:700px;">
<table class="t305" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t304" style="padding:20px 50px 20px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t279" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="100" class="t278" style="width:100px;">
<table class="t277" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t276" style="padding:10px 0 10px 0;"><div class="t275" style="width:100%;text-align:center;"><div class="t274" style="display:inline-block;"><table class="t273" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="top">
<tr class="t272"><td></td><td class="t265" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t264" style="width:100%;"><tr><td class="t261" style="width:10px;" width="10"></td><td class="t262"><a href="https://www.instagram.com/nextcomputers.rs/" style="font-size:0px;" target="_blank"><img class="t260" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/c41bd334-9038-40ed-862c-9064cc755f74.png"/></a></td><td class="t263" style="width:10px;" width="10"></td></tr></table>
</td><td class="t271" width="36" valign="top">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t270" style="width:100%;"><tr><td class="t267" style="width:10px;" width="10"></td><td class="t268"><a href="https://www.linkedin.com/company/nextcomputers" style="font-size:0px;" target="_blank"><img class="t266" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="16" height="16" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/3bca1b8f-cbe8-4c83-baf7-ca78ecb0e28b.png"/></a></td><td class="t269" style="width:10px;" width="10"></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t280" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t296" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t295" style="width:600px;">
<table class="t294" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t293" style="padding:0 15px 0 15px;"><div class="t292" style="width:100%;text-align:center;"><div class="t291" style="display:inline-block;"><table class="t290" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t289"><td></td><td class="t284" width="14" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t283" style="width:100%;"><tr><td class="t282"><div style="font-size:0px;"><img class="t281" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="14" height="14" alt="" src="https://152dc0dc-08a0-4a85-a8b7-0808d7f6ef7e.b-cdn.net/e/8e3eee7d-c53d-49d6-b4ba-c46cbcba1f26/a11bf24a-884f-4dd8-a9b5-ddd2b01e5d9e.png"/></div></td></tr></table>
</td><td class="t288" width="257" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t287" style="width:100%;"><tr><td class="t286"><p class="t285" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#F8F8F8;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">2025 nextcomputers.rs. Sva prava zadržana.</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t299" style="mso-line-height-rule:exactly;mso-line-height-alt:5px;line-height:5px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t303" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t302" style="width:600px;">
<table class="t301" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t300"><p class="t298" style="margin:0;Margin:0;font-family:Albert Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;"><a class="t297" href="https://nextcomputers.rs" style="margin:0;Margin:0;font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;" target="_blank">nextcomputers.rs</a></p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>
`

export const orderConfirmationTemplate = Handlebars.compile(template)
