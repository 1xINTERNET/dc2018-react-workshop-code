<?php
$databases['default']['default'] = array (
  'database' => 'drupal',
  'username' => 'drupal',
  'password' => 'drupal',
  'prefix' => '',
  'host' => 'mariadb',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

/**
 * Solr configuration
 */
$config['search_api.server.solr'] = [
  'backend_config' => [
    'connector_config' => [
      'host' => 'solr',
      'path' => '/solr',
      'core' => 'local',
      'port' => '8983',
    ],
  ],
];

$settings['development'] = TRUE;