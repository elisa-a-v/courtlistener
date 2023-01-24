# Generated by Django 3.2.16 on 2022-12-30 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alerts', '0002_docket_alert_refactor'),
    ]

    operations = [
        migrations.AddField(
            model_name='docketalert',
            name='date_modified',
            field=models.DateTimeField(auto_now=True, db_index=True, help_text='The last moment when the item was modified. A value in year 1750 indicates the value is unknown'),
        ),
        migrations.AlterField(
            model_name='docketalert',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, db_index=True, help_text='The moment when the item was created.'),
        ),
    ]