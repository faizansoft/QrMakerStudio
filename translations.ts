/**
 * UI chrome translations — nav, footer, generator menu, generator form
 * fields, and the customize dialog. Page content (titles, H1s, long-form
 * body copy) lives in constants/routeMetaI18n.ts, a separate system, because
 * it's keyed by route path rather than by a fixed UI string set.
 *
 * Only 5 languages, matching the 5 URL-routed locales in
 * constants/routeMetaI18n.ts (ROUTED_LOCALES). Previously this listed 15
 * languages, but 10 of them only ever changed this chrome layer — there was
 * no routed URL, no translated page content, nothing beyond a handful of nav
 * labels — which read as broken rather than genuinely multilingual. Every
 * language now means the same thing: real localized URLs, real page content.
 *
 * Every key below is verified in use via `grep -rn "t('KEY"` — a prior
 * version carried ~65 declared-and-translated keys (meta_*, hero_*,
 * select_lang, home_stats_*, …) that no component ever called. Declaring a
 * translation for text nobody renders is not translation, it's dead weight
 * that hides real gaps. If you add a new key, wire its `t()` call in the same
 * change — this file has no keys without a caller.
 */

export type TranslationKey =
  // Navigation
  | 'nav_tools' | 'nav_features' | 'nav_resources' | 'nav_faq' | 'nav_about' | 'nav_contact' | 'nav_blog' | 'nav_pricing'
  | 'cta_create_free'
  // Footer
  | 'footer_desc' | 'footer_company_title' | 'footer_group_social' | 'footer_group_tools' | 'footer_group_blog'
  | 'home_cta_primary'
  // Feature names (footer + feature grid)
  | 'feature_logo' | 'feature_custom' | 'feature_color' | 'feature_svg' | 'feature_hd'
  // Generator widget chrome
  | 'ws_tab_content' | 'ws_tab_pattern' | 'ws_tab_corners' | 'ws_tab_logo'
  | 'btn_download_png' | 'btn_download_svg' | 'btn_copy' | 'btn_copied' | 'btn_copy_to_clipboard' | 'btn_download_svg_title'
  // Generator menu — one label + one description per QR type (22 tools)
  | 'tab_url_label' | 'tab_url_desc'
  | 'tab_pdf_label' | 'tab_pdf_desc'
  | 'tab_text_label' | 'tab_text_desc'
  | 'tab_vcard_label' | 'tab_vcard_desc'
  | 'tab_wifi_label' | 'tab_wifi_desc'
  | 'tab_email_label' | 'tab_email_desc'
  | 'tab_sms_label' | 'tab_sms_desc'
  | 'tab_phone_label' | 'tab_phone_desc'
  | 'tab_whatsapp_label' | 'tab_whatsapp_desc'
  | 'tab_facebook_label' | 'tab_facebook_desc'
  | 'tab_location_label' | 'tab_location_desc'
  | 'tab_event_label' | 'tab_event_desc'
  | 'tab_crypto_label' | 'tab_crypto_desc'
  | 'tab_googleform_label' | 'tab_googleform_desc'
  | 'tab_instagram_label' | 'tab_instagram_desc'
  | 'tab_youtube_label' | 'tab_youtube_desc'
  | 'tab_linkedin_label' | 'tab_linkedin_desc'
  | 'tab_twitter_label' | 'tab_twitter_desc'
  | 'tab_tiktok_label' | 'tab_tiktok_desc'
  | 'tab_telegram_label' | 'tab_telegram_desc'
  | 'tab_paypal_label' | 'tab_paypal_desc'
  | 'tab_upi_label' | 'tab_upi_desc'
  // Generator form fields (placeholder + accessible name, kept in sync)
  | 'field_pdf_drive_link' | 'field_pdf_file_url' | 'field_text_message'
  | 'field_vcard_first_name' | 'field_vcard_last_name' | 'field_vcard_phone' | 'field_vcard_email'
  | 'field_vcard_company' | 'field_vcard_title'
  | 'field_wifi_ssid' | 'field_wifi_password'
  | 'field_email_to' | 'field_email_subject' | 'field_email_body'
  | 'field_phone_number' | 'field_sms_number' | 'field_sms_message'
  | 'field_whatsapp_number' | 'field_whatsapp_message'
  | 'field_location_address' | 'field_location_lat' | 'field_location_lng'
  | 'field_event_title' | 'field_event_venue'
  | 'field_crypto_amount' | 'field_crypto_address'
  | 'field_instagram_username' | 'field_youtube_url' | 'field_linkedin_url' | 'field_twitter_handle'
  | 'field_tiktok_username' | 'field_telegram_handle'
  | 'field_paypal_username' | 'field_upi_id'
  | 'field_frame_cta_text' | 'field_qr_title' | 'field_short_slug'
  // Customize dialog
  | 'modal_title' | 'modal_step_frame' | 'modal_step_colors' | 'modal_step_shapes' | 'modal_step_logo'
  | 'modal_reset_all' | 'modal_back' | 'modal_next_step' | 'modal_done_apply'
  | 'modal_select_frame_style' | 'modal_frame_cta_label' | 'modal_frame_cta_hint'
  | 'modal_quick_cta_presets' | 'modal_frame_color' | 'modal_frame_text_color'
  | 'modal_curated_palettes' | 'modal_custom_colors' | 'modal_background'
  | 'modal_pattern_matrix_style' | 'modal_pattern_color'
  | 'modal_corner_square_style' | 'modal_corner_dot_style'
  | 'modal_upload_logo' | 'modal_click_upload' | 'modal_supports_formats'
  | 'modal_custom_logo_active' | 'modal_live_simulation'
  // Footer-only labels (no other UI surface uses these)
  | 'footer_social_media_qr' | 'footer_pdf_qr' | 'footer_app_store_qr' | 'footer_bulk_qr' | 'footer_qr_scanner'
  | 'footer_blog_all' | 'footer_blog_restaurants' | 'footer_blog_printing' | 'footer_blog_vcard'
  | 'footer_blog_realestate' | 'footer_blog_hospitality'
  | 'footer_privacy' | 'footer_terms' | 'footer_login' | 'footer_signup'
  | 'home_qr_types_heading' | 'home_qr_types_subtitle'
  | 'modal_tab_frame' | 'modal_tab_colors' | 'modal_tab_shapes' | 'modal_tab_logo'
  | 'modal_cta_updates_hint' | 'modal_cta_placeholder' | 'modal_chars_suffix'
  | 'modal_frame_style_hint' | 'modal_clear_frame'
  | 'modal_cat_all' | 'modal_cat_popular' | 'modal_cat_focus' | 'modal_cat_device' | 'modal_cat_speech' | 'modal_cat_modern'
  | 'modal_color_palette_heading' | 'modal_color_palette_hint'
  | 'modal_corner_frame_color' | 'modal_corner_dot_color'
  | 'modal_frame_cta_colors_heading'
  | 'modal_white_text' | 'modal_black_text' | 'modal_lime_accent'
  | 'modal_shapes_heading' | 'modal_shapes_hint'
  | 'modal_logo_heading' | 'modal_logo_hint' | 'modal_remove_logo'
  | 'modal_scan_score_suffix' | 'modal_step_of'
  | 'modal_open_button' | 'btn_save_dynamic'
  | 'field_event_start' | 'field_event_end' | 'field_upi_payee_name'
  | 'aria_scroll_tabs_left' | 'aria_scroll_tabs_right'
  | 'rich_technical_badge' | 'rich_faqs_subtitle'
  | 'rich_faq_about_title' | 'rich_ready_cta_title'
  | 'rich_kb_badge' | 'rich_faq_about_subtitle'
  | 'rich_cta_subtitle' | 'rich_cta_button' | 'rich_cta_footnote'
  // Per-tool helper hints shown under the generator inputs
  | 'hint_url' | 'hint_pdf_gdrive_title' | 'hint_pdf_gdrive_step1' | 'hint_pdf_gdrive_step2' | 'hint_pdf_gdrive_step3'
  | 'hint_pdf_uploading' | 'hint_pdf_choose_file' | 'hint_pdf_autohost' | 'hint_pdf_cloud_hosted' | 'hint_pdf_url'
  | 'hint_text' | 'hint_phone' | 'hint_instagram' | 'hint_youtube' | 'hint_linkedin' | 'hint_twitter'
  | 'hint_tiktok' | 'hint_telegram' | 'hint_paypal'
  | 'wifi_enc_none'
  // Generator toggles + live scannability badge
  | 'toggle_privacy_mode' | 'toggle_high_res'
  | 'scan_optical_score' | 'scan_ultra_fast' | 'scan_standard_contrast' | 'scan_low_contrast' | 'scan_may_fail'
  // Social proof + trust strip
  | 'social_trusted_by' | 'social_thousands' | 'social_start_creating' | 'social_no_account'
  | 'trust_privacy_first' | 'trust_secure' | 'trust_global' | 'trust_fast'
  // Dynamic QR save / success dialogs
  | 'dyn_created_title' | 'dyn_created_sub' | 'dyn_short_link' | 'dyn_copy' | 'dyn_copied'
  | 'dyn_target' | 'dyn_test_redirect' | 'dyn_go_dashboard' | 'dyn_view_analytics'
  | 'dyn_save_title' | 'dyn_save_sub' | 'dyn_campaign_title' | 'dyn_current_target' | 'dyn_target_hint'
  | 'dyn_custom_slug' | 'dyn_creating' | 'dyn_create_btn';

export const languageMeta = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
] as const;

export type SupportedLanguage = typeof languageMeta[number]['code'];

// @ts-ignore - plain ESM data module, intentionally untyped at source
import { baseTranslations as BASE_RAW, translations as TRANSLATIONS_RAW } from './scripts/uiStringsData.js';

const baseTranslations: Record<TranslationKey, string> = BASE_RAW as Record<TranslationKey, string>;

export const translations: Record<string, Partial<Record<TranslationKey, string>>> =
  TRANSLATIONS_RAW as Record<string, Partial<Record<TranslationKey, string>>>;

export const getTranslation = (lang: string, key: TranslationKey): string => {
  return translations[lang]?.[key] || baseTranslations[key] || key;
};
