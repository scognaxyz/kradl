"""add column and alter foreign key to new column

Revision ID: 12f05ad40ea4
Revises: 33e40b11e5a6
Create Date: 2023-01-19 09:45:14.145795

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '12f05ad40ea4'
down_revision = '33e40b11e5a6'
branch_labels = None
depends_on = None


def upgrade() -> None:

    op.create_table  (
        "projects",
        sa.Column('id',sa.INTEGER, primary_key=True),
        sa.Column('header',sa.TEXT),
        sa.Column('rules',sa.TEXT),
        sa.Column('pic',sa.TEXT),
        sa.Column('description',sa.TEXT),
        sa.Column('address',sa.TEXT),
        sa.Column('address_contest',sa.TEXT),
        sa.Column('address_factory',sa.TEXT),
    )
    op.create_table  (
        "nfts",
        sa.Column('id',sa.INTEGER, primary_key=True),
        sa.Column('title',sa.TEXT),
        sa.Column('image',sa.TEXT),
        sa.Column('description',sa.TEXT),
        sa.Column('project_id', sa.INTEGER, sa.ForeignKey('projects.id'))
    )

def downgrade() -> None:
    pass
